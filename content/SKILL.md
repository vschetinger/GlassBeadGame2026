# Writing Glass Bead events

You are adding content to the Glass Bead roguelite. Add one markdown file per beat under `content/events/`. Do not edit TypeScript, CSS, or this file unless the person you are talking to explicitly asks for an engine change.

The game already plays. These notes steer a guide that sits on top of it: a dialog, a coach mark, a banner, a hover term, or a skill the player can turn off. A fight is one session of the poker game in `content/games/poker.md`. A later version may turn the same notes into the map of the whole game. Write notes that would still make sense then.

## A note is a node

The file is one node. The body is what the player reads. A line is an edge only when it starts with `>`, `+`, or `?` and contains one wikilink. Every other line, including a wikilink in a sentence, is prose.

```markdown
---
id: dealt
title: A hidden rank
show: coach
at: play
---

These eight motifs are now seen. A ? means the rank is still hidden. Select up to five cards, then play.

> [[revealed|hands_run >= 1]]
```

Frontmatter is flat `key: value` lines between `---`. There are no lists, no nested keys, and no quotes.

| Key | Required | Meaning |
| --- | --- | --- |
| `id` | yes | Stable name. Must match the filename without `.md`. Unique across `content/events/`. |
| `title` | no | Heading. Defaults to the id. |
| `show` | no | `dialog`, `coach`, `page`, or `banner`. Omit it for a silent gate. |
| `at` | when `show: coach` | Which control to point at. See hooks below. |
| `kind` | no | `note` (the default) or `skill`. |
| `bind` | no | Once this note is known, hover the named mark to read it. The only mark today is `seal`, the ? on a card whose rank is hidden. |
| `when` | on a skill | A hand id from `content/games/poker.md`, or `any`. |
| `chips` | on a skill | Whole number added to the hand's chips before the multiplier. |
| `mult` | on a skill | Whole number added to the hand's multiplier. |

`id` may contain dots (`lesson.fifty`). Do not use spaces.

## How a line becomes an edge

```text
> [[target|alias]]
+ [[target|alias]]
? [[target|alias]]
```

The glyph decides what the alias means. The same brackets are used for all three so a later language can replace the alias without a new file format.

| Glyph | Alias is | What it does |
| --- | --- | --- |
| `>` | a counter test, or empty | Follow it by itself when the test is true. The player does not click it. The first matching `>` in the file wins. |
| `+` | a counter test | Offer the target once, as a banner, while the player is sitting on this node. It does not move the beat until they open it. |
| `?` | the button label | A button. The words are shown to the player. They are never a formula. |

An empty alias on `>` is always true: `> [[playing]]`. An empty alias on `+` never fires. A `?` with no alias uses the target id as the label: `? [[playing]]`.

Tests are one comparison, nothing else:

```text
seen_total == 0
seen_run >= 5
hands_run > 0
discovered_total != 3
```

The counter is `lowercase_with_underscores`. The operator is one of `==`, `!=`, `>=`, `<=`, `>`, `<`. The number is a non-negative integer. There is no `and`, `or`, `not`, parentheses, or arithmetic.

- AND is two gates in a row: `> [[almost|seen_run >= 5]]` and that next note has `> [[ready|hands_run >= 1]]`.
- OR is two edges: `> [[home|runs == 0]]` then `> [[away|runs > 0]]`.
- NOT is another edge with the other comparison, placed so the first match is the one you want.

Unknown counters, unknown targets, and unreadable tests are skipped. The walker does not guess. The build prints a warning. Fix the note.

Order is the priority. Put the rare or early gate first.

## What the player sees

| `show` | On screen |
| --- | --- |
| `dialog` | A centered card. `?` lines are its buttons. A `>` can also leave the card when the test becomes true, so a dialog cannot trap the player. |
| `coach` | The same card, anchored to the control named by `at`. The control stays clickable. |
| `page` | A lesson card, same shape as a dialog in this version. Use it for something worth rereading later. |
| `banner` | Reserved. Do not set `show: banner` on a note you also offer with `+`. The banner is the `+` edge. Opening it lands on the target, which should be a `dialog` or `page`. |
| omitted | Silent. The player sees nothing. Use this for a gate whose only job is to choose the next node. |

A coach whose hook is not on screen becomes a centered card, so the sentence is still readable. Prefer a path where the hook is on screen when the note is showing.

At most two `+` banners show at once, in file order. The rest wait until one is dismissed or opened and then left.

Opening a banner sets the beat to that note. Leaving it with a `?` remembers the offer, so it does not come back. Dismissing the banner without opening remembers it too.

## Meta-links

A wikilink in a sentence is not an edge. It is a term:

```markdown
A [[term.rank|?]] on a card is an unknown rank.
```

The words after the bar are what the player reads. While this note is open, those words can be hovered, and the hover shows the other note. Closing this note with a `?` button adds both notes to `known`. After that, the term can be hovered from the rest of the interface.

`bind` is how a known note attaches to a mark that is not a sentence. `bind: seal` puts the note on the ? of every card whose rank is still hidden. One known note per mark; if two known notes bind the same mark, the first file in alphabetical order wins.

`known` is the player's ontology of rules: the notes they have closed, and the terms those notes named. It is not the motif library. Motifs you have seen stay on `seen_total`.

## Skills

A skill is a note with `kind: skill`. It needs `chips`, `mult`, or both. `when` names one hand, or `any`.

```markdown
---
id: skill.studied-hand
title: Studied hand
kind: skill
show: page
when: any
chips: 4
---

Every hand scores 4 extra chips before the multiplier.

? [[playing|Keep going]]
```

Offer it from `playing` with a `+` line, the same way as a lesson. Closing the skill turns it on. The bar then shows its name with a checkbox. The player can turn it off and on. A skill that is off does not change the score. Chips from every skill that is on are added together, then the multipliers, then the hand is `(hand chips + card chips + skill chips) × (hand multiplier + skill multipliers)`.

## The poker game

`content/games/poker.md` is the hand table for every fight. A fight stores `game: poker` and scores with that file. The lines are best first:

```text
pair | 10 | 2 | Pair
```

That is hand id, chips, multiplier, label. The ids are fixed, because the engine still decides whether five cards are a pair, a straight, or a flush. You may change the numbers and the labels, and you may reorder the lines. `highCard` has to remain, and it should stay last. An unknown id is skipped.

A later version can replace the match for each id with a small composition of predicates. The line above is the place those predicates would sit. Do not invent a new id until the engine knows how to recognize it.

`content/games/ranks.md` is the chip value of each rank. One line per rank, and every rank has to be there:

```text
A | 11
King | 10
10 | 10
```

The ranks are `2` through `10`, `Page`, `Knight`, `Queen`, `King`, and `A`. These chips are added for each scoring card before the hand multiplier.

## Run numbers

`content/balance/default.md` is the full run. `content/balance/short.md` lists only the lines that differ. A new run copies the file it started from, so a change shows up on the next run.

A line is `group.name: value`. Numbers are whole or decimal. `true` and `false` are the switches. A list is commas. `catalog` on `texts.similarityThreshold` means "use the threshold shipped with the motif catalog."

| Key | What it changes |
| --- | --- |
| `world.motifsPerRun` | How many motifs are drawn into the run. |
| `world.regionsPerRun` | How many gods are on the map. |
| `world.optimizationSwaps` | How hard the map tries to keep similar motifs together. |
| `world.optimizationNoise` | How much that grouping is allowed to wobble. `0` is exact. |
| `world.minMotifsPerRegion` | Smallest land. |
| `world.startRegionInitiallyConquered` | Home starts held. |
| `deck.startingSize` | Cards in a new deck. |
| `deck.minimumSize` | The deck cannot be rewarded below this. |
| `combat.visibleHandSize` | Cards dealt into the hand. |
| `combat.maxCardsPerPlay` | Cards that can be played at once. The cap is 5. |
| `combat.baseHands` | Hands in a fight, before upgrades. |
| `combat.baseDiscards` | Discards in a fight, before upgrades. |
| `combat.baseLives` | Lives at the start of a run, before upgrades. |
| `combat.reshuffleOnEmpty` | The discard pile is shuffled back when the draw pile is empty. |
| `difficulty.baseTarget` | Score asked of the first land, before hop and size. |
| `difficulty.hopMultiplier` | Each step away from home multiplies the target by this. It must be greater than 1. |
| `difficulty.expectedRegionSize` | Region size that does not change the target. |
| `difficulty.sizeSlope` | How much a bigger or smaller land moves the target. |
| `difficulty.sizeMin` | Floor of that size adjustment. |
| `difficulty.sizeMax` | Ceiling of that size adjustment. |
| `difficulty.scoreStep` | Targets are rounded to this step. |
| `texts.minResonantCards` | Motifs that must resemble a text before it notices the hand. |
| `texts.similarityThreshold` | How close a motif must be. `catalog`, or a decimal such as `0.7`. |
| `texts.baseBonus` | Flat points from a text you have already unlocked. |
| `texts.perExtraCardBonus` | Extra points for each resonant motif past the minimum. |
| `texts.maxActiveBonusesPerHand` | How many texts can score on one hand. |
| `progression.pointThresholds` | Discovered-motif counts that grant an upgrade point. |
| `progression.upgrades.hands.cost` | Points for one extra hand per fight. |
| `progression.upgrades.hands.max` | Cap on that upgrade. |
| `progression.upgrades.discards.cost` | Points for one extra discard. |
| `progression.upgrades.discards.max` | Cap on that upgrade. |
| `progression.upgrades.lives.cost` | Points for one extra life. |
| `progression.upgrades.lives.max` | Cap on that upgrade. |

The target for a land is `baseTarget × hopMultiplier ^ hop`, nudged by how many motifs that land holds, then rounded to `scoreStep`. A full run's first neighbor is about `100 × 1.5 = 150`.

Four keys are stored and reserved. Changing them does not change play yet: `deck.allowDuplicates`, `texts.newDiscoveryScoresImmediately`, `texts.bonusAppliedAfterPokerMultiplier`, `progression.respecBetweenRuns`.

## Counters you may test

These are the only names that fire. Anything else warns and never matches.

| Counter | Counts |
| --- | --- |
| `seen_total` | Motifs met in the lifetime of this browser: pictures dealt, played, or scouted on the map, plus ranks discovered. |
| `seen_run` | Motifs met since this run began. A new run starts it at 0. The current battle's hand, discard, and played cards count even before they are stored. The draw pile does not. |
| `discovered_total` | Motifs whose rank was revealed by playing them. Lifetime. |
| `texts_total` | Folklore texts unlocked. Lifetime. |
| `runs` | Runs started, including the one in progress. Becomes 1 the moment New run or Short run succeeds. |
| `hands_run` | Poker hands played in this run. Becomes 1 when the first hand is committed, before the score ceremony ends. |
| `in_battle` | `1` while a fight is active. `0` on the map, on a reward, and after the fight. |
| `conquered` | Regions held, including home. Home starts at 1. The next win makes it 2. |

`seen_run >= 8` is true as soon as the opening hand is dealt, because that hand has eight cards. Do not use it to leave a note that is supposed to be read on the home screen. Leave home with `runs >= 1`, leave the map with `in_battle == 1`, and leave the hand coach with `hands_run >= 1`.

## Hooks a coach may point at

| `at` | The control |
| --- | --- |
| `start-run` | The group of run buttons on the home screen. |
| `new-run` | New run. |
| `short-run` | Short run. |
| `continue` | Continue, only when a run exists. |
| `map` | The world map, only while the map is open. |
| `attack` | The Attack button on the map. |
| `play` | Play, during a fight. |
| `discard` | Discard, during a fight. |
| `library` | Encyclopedia in the top bar. |
| `deck` | Deck in the top bar, only during a run. |

## How the beat moves

The profile remembers one beat, starting at `start`. Whenever the counters change, and when the player presses a `?` button, the game follows `>` edges until one does not match. It stops after 12 hops, and it will not loop.

`+` never moves the beat by itself.

A player who already has `seen_total > 0` must not be sent through the first-visit notes. `start` already does this: `seen_total == 0` goes to `empty`, otherwise to `returning`. Keep that order.

## The notes that already exist

Do not reuse these ids.

| id | Role |
| --- | --- |
| `start` | Silent. New library or returning library. |
| `empty` | First visit. The library is empty. |
| `enter-table` | Coach on the run buttons. |
| `on-map` | Coach on Attack. |
| `dealt` | Coach on Play. |
| `revealed` | After the first hand. |
| `library-tip` | Coach on the library. |
| `playing` | Silent sink. Offers the lessons below. |
| `returning` | Anyone who has already seen a motif. |
| `lesson.question-mark` | What `?` means on a card. Names `term.rank`. |
| `term.rank` | The hover text for a hidden rank. Bound to the seal. |
| `skill.studied-hand` | A skill: +4 chips on every hand, and a checkbox. |
| `lesson.this-run` | Seen this run versus the library. |
| `lesson.frontier` | The map is a neighbor graph. |
| `lesson.fifty` | Fifty motifs seen. |

New lessons offered from `playing` should be a `dialog` or `page` with one `?` back to `playing`, and a `+` edge on `playing` whose test is a counter above.

## A finished example

File `content/events/lesson.neighbors.md`:

```markdown
---
id: lesson.neighbors
title: Neighbors
show: page
---

Two gods fight only when their lands share a border. The page draws that border and hides the rest.

? [[playing|Keep going]]
```

And one new line on `content/events/playing.md`, after the offers already there:

```markdown
+ [[lesson.neighbors|conquered >= 3]]
```

That is the whole change. No new button code.

## Rules that keep the notes playable

- Write the body in the second person, short enough to read over a card.
- Say what just became true. Do not preview a screen the player is not on.
- One idea per note.
- A `?` label is a short action: "Keep playing", "Open the library".
- Do not put a counter test in a `?` label. `? [[next|seen_run >= 5]]` would print that formula on the button.
- Do not invent counters, hooks, `show` values, `bind` marks, `kind` values, or hand ids.
- Do not write JavaScript, HTML, or YAML lists.
- Prose may name a motif, a god, or a rule. It must not depend on a specific seed, because every run is random.
- A wikilink in a sentence is a meta-link. Use it when the player should be able to hover that word. A name that needs no note is written in words.
