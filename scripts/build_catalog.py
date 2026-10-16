#!/usr/bin/env python3
"""Build the roguelite catalog and similarity tables from the Lennings datasets.

Reads motif, deity, and folklore-text JSON from a local Lennings checkout,
drops the raw embedding arrays, and writes:

  public/data/catalog.json
  public/data/similarities.bin

Cosine values are stored as int16, scaled by 10000.
"""

from __future__ import annotations

import json
import os
import struct
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
LENNINGS = Path(os.environ.get("LENNINGS_ROOT", "/Users/vschetinger/Lennings/served/lennings"))
OUT = ROOT / "public" / "data"
IMAGE_BASE = "https://vschetinger.github.io/lennings/levels/GlassBeadGame/images/"
SCALE = 10000
MAGIC = b"GBG1"

RANK_WORDS = {
    "Ace": "A",
    "Two": "2",
    "Three": "3",
    "Four": "4",
    "Five": "5",
    "Six": "6",
    "Seven": "7",
    "Eight": "8",
    "Nine": "9",
    "Ten": "10",
    "Page": "Page",
    "Knight": "Knight",
    "Queen": "Queen",
    "King": "King",
}


def load_json(path: Path):
    with path.open() as f:
        return json.load(f)


def matrix_from(records: list[dict]) -> np.ndarray:
    dim = len(records[0]["embedding"])
    mat = np.empty((len(records), dim), np.float32)
    for i, record in enumerate(records):
        mat[i] = record.pop("embedding")
    norms = np.linalg.norm(mat, axis=1, keepdims=True)
    norms[norms == 0] = 1
    mat /= norms
    return mat


def major_rank(number: int) -> str:
    digit = number % 10
    if digit == 0:
        return "10"
    if digit == 1:
        return "A"
    return str(digit)


def image_file(img_dir: Path, motif_id: str, image_path: str | None) -> str:
    stem = Path(image_path).stem if image_path else motif_id
    for candidate in (f"{stem}.png", f"{motif_id}.png", f"{stem}.jpg", f"{stem}.jpeg"):
        if (img_dir / candidate).exists():
            return candidate
    return f"{stem}.png"


def poker_face(card: dict) -> dict:
    if card.get("arcana") == "Major Arcana":
        rank = major_rank(int(card["number"]))
        return {
            "rank": rank,
            "suit": None,
            "wild": True,
            "tarotName": card["name"],
            "arcana": "major",
        }
    name = card["name"]
    if " of " not in name:
        raise SystemExit(f"Unparsed minor arcana name: {name}")
    word, suit = name.split(" of ", 1)
    if word not in RANK_WORDS:
        raise SystemExit(f"Unknown minor rank word: {word}")
    return {
        "rank": RANK_WORDS[word],
        "suit": suit,
        "wild": False,
        "tarotName": name,
        "arcana": "minor",
    }


def to_i16(values: np.ndarray) -> np.ndarray:
    scaled = np.rint(np.clip(values, -1, 1) * SCALE)
    return scaled.astype(np.int16)


def choose_threshold(motif_text: np.ndarray) -> dict:
    """Pick a cosine cutoff where a random 5-card play qualifies for about 0.4 texts."""
    rng = np.random.default_rng(2026)
    n_motifs, n_texts = motif_text.shape
    low, high = np.quantile(motif_text, [0.992, 0.997])
    candidates = np.linspace(low, high, 9)
    report = []
    best = None
    for threshold in candidates:
        triggers = []
        for _ in range(400):
            hand = rng.choice(n_motifs, size=5, replace=False)
            counts = (motif_text[hand] >= threshold).sum(axis=0)
            triggers.append(int((counts >= 2).sum()))
        mean = float(np.mean(triggers))
        entry = {"threshold": float(threshold), "meanQualifyingTexts": mean}
        report.append(entry)
        if best is None or abs(mean - 0.4) < abs(best["meanQualifyingTexts"] - 0.4):
            best = entry
    flat = motif_text.ravel()
    qs = np.quantile(flat, [0.5, 0.9, 0.95, 0.99, 0.995, 0.999])
    return {
        "chosen": best,
        "candidates": report,
        "quantiles": {
            "p50": float(qs[0]),
            "p90": float(qs[1]),
            "p95": float(qs[2]),
            "p99": float(qs[3]),
            "p995": float(qs[4]),
            "p999": float(qs[5]),
        },
    }


def main() -> None:
    img_dir = LENNINGS / "levels" / "GlassBeadGame" / "images"
    print("loading motifs", flush=True)
    motifs_raw = load_json(LENNINGS / "levels" / "GlassBeadGame" / "gbg-motifs.lmstudio.json")
    print("loading deities", flush=True)
    deities_raw = load_json(LENNINGS / "datasets" / "deities" / "deities.json")
    print("loading texts", flush=True)
    texts_raw = load_json(LENNINGS / "datasets" / "aft_motifs.json")
    cards = load_json(LENNINGS / "datasets" / "tarot_cards.json")
    cards_by_index = {card["index"]: card for card in cards}

    print("normalizing embeddings", flush=True)
    motif_vec = matrix_from(motifs_raw)
    deity_vec = matrix_from(deities_raw)
    text_vec = matrix_from(texts_raw)
    model = next((m.get("embedding_model") for m in motifs_raw if m.get("embedding_model")), "text-embedding-3-large")

    motifs = []
    missing_images = 0
    for motif in motifs_raw:
        card = cards_by_index.get(motif.get("tarot_index"))
        if card is None:
            continue
        face = poker_face(card)
        file_name = image_file(img_dir, motif["id"], motif.get("image_path") or motif.get("img"))
        if not (img_dir / file_name).exists():
            missing_images += 1
        motifs.append({
            "id": motif["id"],
            "name": motif.get("name") or motif["id"],
            "description": motif.get("description") or "",
            "chapter": motif.get("chapter") or "",
            "image": file_name,
            "tarotIndex": motif.get("tarot_index"),
            "tarotName": face["tarotName"],
            "arcana": face["arcana"],
            "rank": face["rank"],
            "suit": face["suit"],
            "wild": face["wild"],
        })

    deities = [{
        "id": deity["id"],
        "name": deity.get("name") or deity["id"],
        "pantheon": deity.get("pantheon") or "",
        "description": deity.get("description_short") or deity.get("description") or "",
    } for deity in deities_raw]

    texts = [{
        "id": text["id"],
        "name": text.get("name") or text["id"],
        "description": text.get("description") or "",
        "source": text.get("source") or "",
        "provenance": text.get("provenance") or "",
        "dataSource": text.get("data_source") or "",
    } for text in texts_raw]

    print("cosine tables", flush=True)
    motif_deity = motif_vec @ deity_vec.T
    motif_text = motif_vec @ text_vec.T
    deity_deity = deity_vec @ deity_vec.T
    threshold_report = choose_threshold(motif_text)
    chosen = threshold_report["chosen"]["threshold"]

    catalog = {
        "catalogVersion": "lennings-lmstudio-768-2026-02",
        "embeddingModel": model,
        "embeddingDim": int(motif_vec.shape[1]),
        "similarityScale": SCALE,
        "textThreshold": chosen,
        "imageBase": IMAGE_BASE,
        "counts": {
            "motifs": len(motifs),
            "majors": sum(1 for m in motifs if m["wild"]),
            "minors": sum(1 for m in motifs if not m["wild"]),
            "deities": len(deities),
            "texts": len(texts),
            "missingImages": missing_images,
        },
        "thresholdReport": threshold_report,
        "motifs": motifs,
        "deities": deities,
        "texts": texts,
    }

    OUT.mkdir(parents=True, exist_ok=True)
    catalog_path = OUT / "catalog.json"
    print("writing catalog", flush=True)
    with catalog_path.open("w") as f:
        json.dump(catalog, f, ensure_ascii=False, separators=(",", ":"))

    bin_path = OUT / "similarities.bin"
    print("writing similarities", flush=True)
    parts = [to_i16(motif_deity), to_i16(motif_text), to_i16(deity_deity)]
    with bin_path.open("wb") as f:
        f.write(MAGIC)
        f.write(struct.pack("<IIIIII", 1, len(motifs), len(deities), len(texts), SCALE, parts[0].size + parts[1].size + parts[2].size))
        for part in parts:
            f.write(part.tobytes())

    report_path = OUT / "build-report.json"
    with report_path.open("w") as f:
        json.dump({
            "counts": catalog["counts"],
            "embeddingModel": model,
            "thresholdReport": threshold_report,
            "catalogBytes": catalog_path.stat().st_size,
            "similarityBytes": bin_path.stat().st_size,
        }, f, indent=2)
    print(json.dumps({
        "counts": catalog["counts"],
        "threshold": chosen,
        "catalogMB": round(catalog_path.stat().st_size / 1e6, 2),
        "similarityMB": round(bin_path.stat().st_size / 1e6, 2),
    }, indent=2))


if __name__ == "__main__":
    main()
