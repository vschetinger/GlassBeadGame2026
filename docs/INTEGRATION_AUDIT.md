# Integration audit

Checked against local Lennings at `/Users/vschetinger/Lennings/served/lennings` (GitHub `vschetinger/lennings`, catalog dated 2026-02-11) and the deployed Practice Mode bundle at `vschetinger/GBG-Practice-Mode` `gh-pages`.

## What this game uses

| Need | Source | Decision |
|---|---|---|
| Motif ids, names, descriptions, chapters, 768-d embeddings | `levels/GlassBeadGame/gbg-motifs.lmstudio.json` | 1,265 motifs. Model field: `text-embedding-3-large`. |
| Tarot faces | `datasets/tarot_cards.json`, joined on `tarot_index` | 0–21 majors, 22–77 minors. Practice Mode’s separate 0–55 map is not used. |
| Images | `levels/GlassBeadGame/images/*.png` | Not copied. The client loads `https://vschetinger.github.io/lennings/levels/GlassBeadGame/images/`. All 1,265 motif files exist. |
| Deity regions | `datasets/deities/deities.json` | 603 records: 484 Roman, 74 American, 45 Slavic. The region label is the deity name. There is no separate epithet field. |
| Folklore texts | `datasets/aft_motifs.json` | 1,518 tales with description, bibliographic `source`, and `provenance`. These are the stored texts, not generated prose. |
| Embeddings for deities and tales | same files | 768-d. The model name is stored only on motifs. Lennings already compares these three sets in one space, and this game does the same. |

Cosine tables are precomputed by `scripts/build_catalog.py` into `public/data/similarities.bin` (int16, scale 10,000). The browser does not ship the raw vectors.

## What was not reused

- Practice Mode scores a hand by cosine similarity to a target motif, plus Tarot, I Ching, chapter, digital-root, substring, and syzygy bonuses. It has no poker evaluator. This game’s poker layer is new and follows Balatro’s level-1 chip table, including secret hands.
- Lennings play mode is a particle-Lenia reconstruction game scored by SSIM. Its collection graph is a force layout, not an embedding map. Region geography here is classical MDS of the twenty chosen deities, then Delaunay neighbors and Voronoi cells.
- I Ching fields on the motifs are left unused.
- No Practice Mode source module is imported. The `gh-pages` branch is a production bundle; `main` contains only a README.

## Licensing and assets

Motif images and the three datasets remain in the Lennings repository and are requested from the existing GitHub Pages deploy. This repository stores derived tables, not the source art. Provenance for each tale is the `source` and `provenance` fields shown in the encyclopedia.
