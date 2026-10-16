# Balancing

All knobs live in `src/config.ts`. The short-run preset lowers the world to 60 motifs and 6 regions and sets `baseTarget` to 70. Canonical defaults are below.

## Combat score

Level-1 Balatro values. Card chips are added to the hand chips before the multiplier. Folklore is a flat bonus after that product. There is no hand leveling.

A pair of aces scores `(10 + 11 + 11) × 2 = 64`. A flush of five modest cards is around two hundred points. The hand shows 8 cards and a play uses at most 5, from a starting deck of 15. The first frontier (hop 1) therefore asks for about `100 × 1.5 = 150`, rounded to the nearest 10, with a small size adjustment. Deeper hops multiply by 1.5 again. These targets are a starting point for playtesting.

## Region size

`sizeSlope` 0.015, clamped to 0.90–1.15. Hop distance moves the target more than region size does.

## Text resonance

Threshold **0.655**, chosen by `scripts/build_catalog.py` so a random five-card play qualifies for about **0.32** texts on average. That count is not the same as a bonus: a text scores only on a later play, and at most two texts score. The measurement is in `public/data/build-report.json`.

Random hands understate real play, because a player can chase motifs that share a tale. If discoveries feel rare or constant, change `texts.similarityThreshold` in the config; a number there overrides the catalog value.

## Upgrades

One point at 10, 25, 50, 75, 100, 150, and 200 discovered motifs. Hands cost 2 (max +2), discards cost 1 (max +3), lives cost 3 (max +2). Respec is free and applies to the next run.
