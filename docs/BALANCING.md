# Balancing

Knobs live in `content/balance/default.md`, `content/balance/short.md`, `content/games/poker.md`, and `content/games/ranks.md`. The full run draws 32 motifs into 8 lands and starts with 2 cards. The short run draws 18 motifs into 5 lands and keeps the same deck and target model. A new run copies the file it started from. An unfinished run keeps the copy it already has. Canonical defaults are below.

## Combat score

Level-1 Balatro values. Card chips are added to the hand chips before the multiplier. Folklore is a flat bonus after that product. There is no hand leveling.

A pair of aces scores `(10 + 11 + 11) × 2 = 64`. Two twos score `(10 + 2 + 2) × 2 = 28`. Two unmatched low cards score a high card, about 8. The hand deals at most 5 cards, and a smaller deck deals every card it has. A fresh fight has 4 hands, so a pair of twos played perfectly is 112 and two low cards played perfectly are 32.

`difficulty.targetModel: potential` freezes a land's target when that land first becomes attackable. The wave runs from `waveLow` 0.45 to `waveHigh` 1.15 of that perfect total, so one neighbor is attainable and another is a risk. Growing the deck does not raise a target that is already set. The next ring is priced from the deck you have when it opens. `hop` is still available and uses `baseTarget × hopMultiplier ^ hop`.

## Region size

Lands are small: at least 3 motifs, about 4 on a full run. `sizeSlope` 0.015, clamped to 0.90–1.15, still applies when `targetModel` is `hop`. A victory offers one new card from that land (`deck.reward: add`). Deck trimming is the `either` reward, and it is not the current opening.

## Text resonance

Threshold **0.655**, chosen by `scripts/build_catalog.py` so a random five-card play qualifies for about **0.32** texts on average. That count is not the same as a bonus: a text scores only on a later play, and at most two texts score. The measurement is in `public/data/build-report.json`.

Random hands understate real play, because a player can chase motifs that share a tale. If discoveries feel rare or constant, set `texts.similarityThreshold` in `content/balance/default.md` to a decimal. `catalog` keeps the shipped threshold.

## Upgrades

One point at 10, 25, 50, 75, 100, 150, and 200 discovered motifs. Hands cost 2 (max +2), discards cost 1 (max +3), lives cost 3 (max +2). Respec is free and applies to the next run.
