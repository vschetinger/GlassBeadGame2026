# Data dictionary

Catalog version `lennings-lmstudio-768-2026-02`.

## Motif

Stable id is the Thompson motif code, for example `A1012.2`. Array position is not an id.

| Field | Meaning |
|---|---|
| `name`, `description`, `chapter` | Catalog text from `gbg-motifs.lmstudio.json`. |
| `image` | Filename under the Lennings image directory. |
| `tarotIndex`, `tarotName`, `arcana` | Nearest card in the 78-card Lennings deck. |
| `rank` | Poker rank. Minors use Ace, 2–10, Page, Knight, Queen, King. Majors use the card number modulo 10, with remainder 0 as 10 and remainder 1 as Ace. |
| `suit` | Cups, Pentacles, Swords, or Wands. Null for majors. |
| `wild` | True for majors. One card, every suit, for flush checks only. |

Many motifs share one Tarot face. Two different motifs with the same rank are a pair. Chip values: Ace 11, Page / Knight / Queen / King 10, pips equal their number.

## Deity

Wikidata id, for example `Q4649`. `name` is the map label. `pantheon` is `roman`, `american`, or `slavic`.

## Text

Id from Ashliman’s Folktexts, for example `910B`. `description` is the stored tale text. `source` is the bibliographic citation. `provenance` is the place tag. The encyclopedia shows those fields and does not invent a fuller text.

## Run keys

A region id is `region-` plus the deity id. Conquered ids, deck ids, and discovery ids are these stable strings. A motif is in exactly one region per run and may also be in the deck.

## Profile keys

`discoveredMotifIds` are cards that have been played. `encounteredMotifIds` are cards whose picture has been seen. `discoveredTextIds` are tales unlocked by a committed play of at least two motifs at or above the cosine threshold. Upgrade points are derived from discovery count and are not spent out of that list.
