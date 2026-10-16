# Glass Bead Roguelite

A browser roguelite on the Glass Bead Game motif corpus. A seeded run samples illustrated Thompson motifs, gathers them under twenty deities, and asks you to conquer those regions with Balatro-style poker. Playing a card reveals its Tarot face permanently. The deck does not persist.

## Setup

The playable catalog is built from a local checkout of [lennings](https://github.com/vschetinger/lennings). Images stay on that project’s GitHub Pages site.

```bash
npm install
LENNINGS_ROOT=/path/to/lennings python3 scripts/build_catalog.py
npm test
npm run dev
```

The default `LENNINGS_ROOT` on this machine is `/Users/vschetinger/Lennings/served/lennings`.

Open the Vite URL. New run deals a 20-region world. Short run deals six regions and a lower score target.

## Play

- Attack a region on the frontier.
- Select 1–5 cards. Enter plays them. Backspace discards them.
- A hand scores `(hand chips + chips of the cards that form the hand) × multiplier`, then adds folklore bonuses.
- Major arcana are wild suits. Their rank is the last digit of the card number: 0, 10, and 20 play as 10; 1, 11, and 21 play as Ace.
- After a victory, add one motif from that deity’s domain or remove one deck card.
- Discoveries and the upgrade build are kept in this browser. Export them from Progression.

## Docs

- `docs/INTEGRATION_AUDIT.md` — what was taken from the two existing games
- `docs/DATA_DICTIONARY.md` — ids, embeddings, and the poker face of a motif
- `docs/BALANCING.md` — the config values and the text-threshold measurement
