import { describe, expect, it } from 'vitest';
import { SHORT_RUN_CONFIG } from './config';
import { beginBattle, lockFrontier, resolveReward, rewardOptions } from './game';
import { emptyProfile } from './progression';
import { DEFAULT_HANDS } from './poker';
import { bestHandScore, waveScores } from './targets';
import type { Catalog, MotifRecord, PokerRank, RunState, Suit } from './types';

function card(id: string, rank: PokerRank, suit: Suit | null, chips: number) {
  return { id, rank, suit, wild: false, chips };
}

function motif(id: string, rank: PokerRank, suit: Suit | null = 'Cups'): MotifRecord {
  return {
    id,
    name: id,
    description: '',
    chapter: '',
    image: '',
    tarotIndex: 0,
    tarotName: rank,
    arcana: 'minor',
    rank,
    suit,
    wild: false,
  };
}

function catalogOf(motifs: MotifRecord[]): Catalog {
  return {
    catalogVersion: 'test',
    embeddingModel: 'test',
    embeddingDim: 2,
    similarityScale: 10000,
    textThreshold: 0.5,
    imageBase: '',
    counts: { motifs: motifs.length, majors: 0, minors: motifs.length, deities: 1, texts: 0, missingImages: 0 },
    motifs,
    deities: [],
    texts: [],
    motifIndex: new Map(motifs.map((item, index) => [item.id, index])),
    deityIndex: new Map(),
    textIndex: new Map(),
  };
}

function region(id: string, hop: number, neighbors: string[], motifs: string[]) {
  return {
    id,
    deityId: id,
    motifIds: motifs,
    centroid: [0, 0] as [number, number],
    polygon: [[0, 0], [1, 0], [0, 1]] as [number, number][],
    neighborRegionIds: neighbors,
    hopDistance: hop,
    targetScore: 0,
    targetLocked: false,
  };
}

describe('opening potential', () => {
  it('keeps a weak pair and two low cards under a perfect run of the easiest land', () => {
    const twos = bestHandScore([
      card('a', '2', 'Cups', 2),
      card('b', '2', 'Wands', 2),
    ], DEFAULT_HANDS, 5);
    const lows = bestHandScore([
      card('a', '2', 'Cups', 2),
      card('b', '3', 'Wands', 3),
    ], DEFAULT_HANDS, 5);
    const aces = bestHandScore([
      card('a', 'A', 'Cups', 11),
      card('b', 'A', 'Wands', 11),
    ], DEFAULT_HANDS, 5);
    expect(twos).toBe(28);
    expect(lows).toBe(8);
    expect(aces).toBe(64);
    const hands = 4;
    for (const best of [twos, lows, aces]) {
      const scores = waveScores(best * hands, 3, 0.45, 1.15, 10);
      expect(scores[0]).toBeLessThanOrEqual(best * hands);
      expect(scores[0]).toBeLessThan(scores[2]);
      expect(new Set(scores).size).toBe(3);
    }
    expect(waveScores(twos * hands, 3, 0.45, 1.15, 10)[0]).toBeLessThan(waveScores(aces * hands, 3, 0.45, 1.15, 10)[0]);
  });

  it('freezes a wave and prices the next one from the grown deck', () => {
    const motifs = [
      motif('t1', '2', 'Cups'),
      motif('t2', '2', 'Wands'),
      motif('a1', 'A', 'Cups'),
      motif('a2', 'A', 'Wands'),
      motif('a3', 'A', 'Swords'),
      motif('a4', 'A', 'Pentacles'),
      motif('a5', 'A', 'Cups'),
    ];
    const catalog = catalogOf(motifs);
    const profile = emptyProfile('test');
    const base: RunState = {
      schemaVersion: 1,
      catalogVersion: 'test',
      seed: 'test',
      rngState: 1,
      configSnapshot: SHORT_RUN_CONFIG,
      allocationSnapshot: { hands: 0, discards: 0, lives: 0 },
      worldMotifIds: motifs.map((item) => item.id),
      regions: [
        region('home', 0, ['near', 'side'], ['t1']),
        region('near', 1, ['home', 'deep'], ['n1']),
        region('side', 1, ['home'], ['s1']),
        region('deep', 2, ['near'], ['a1']),
      ],
      startRegionId: 'home',
      conqueredRegionIds: ['home'],
      deckMotifIds: ['t1', 't2'],
      livesRemaining: 2,
      status: 'active',
      handsPlayed: 0,
    };
    const first = lockFrontier(base, profile, catalog);
    const near = first.regions.find((item) => item.id === 'near')!;
    const side = first.regions.find((item) => item.id === 'side')!;
    const deep = first.regions.find((item) => item.id === 'deep')!;
    expect(near.targetLocked).toBe(true);
    expect(side.targetLocked).toBe(true);
    expect(near.targetScore).not.toBe(side.targetScore);
    expect(Math.min(near.targetScore, side.targetScore)).toBeLessThanOrEqual(28 * 4);
    expect(deep.targetLocked).toBe(false);

    const grown: RunState = {
      ...first,
      conqueredRegionIds: ['home', 'near'],
      deckMotifIds: ['a1', 'a2', 'a3', 'a4', 'a5'],
    };
    const second = lockFrontier(grown, profile, catalog);
    expect(second.regions.find((item) => item.id === 'near')!.targetScore).toBe(near.targetScore);
    expect(second.regions.find((item) => item.id === 'side')!.targetScore).toBe(side.targetScore);
    const next = second.regions.find((item) => item.id === 'deep')!;
    expect(next.targetLocked).toBe(true);
    expect(next.targetScore).toBeGreaterThan(near.targetScore);
  });

  it('deals the whole deck until it passes five, then keeps one card back', () => {
    const motifs = ['a', 'b', 'c', 'd', 'e', 'f'].map((id, index) => motif(id, index < 2 ? '2' : 'A', 'Cups'));
    const catalog = catalogOf(motifs);
    const profile = emptyProfile('test');
    const base: RunState = {
      schemaVersion: 1,
      catalogVersion: 'test',
      seed: 'test',
      rngState: 3,
      configSnapshot: SHORT_RUN_CONFIG,
      allocationSnapshot: { hands: 0, discards: 0, lives: 0 },
      worldMotifIds: motifs.map((item) => item.id),
      regions: [
        region('home', 0, ['land'], []),
        region('land', 1, ['home'], ['a']),
      ],
      startRegionId: 'home',
      conqueredRegionIds: ['home'],
      deckMotifIds: ['a', 'b'],
      livesRemaining: 2,
      status: 'active',
      handsPlayed: 0,
    };
    const small = beginBattle(base, profile, 'land', SHORT_RUN_CONFIG, catalog);
    expect(small.run.battle?.visibleHandIds).toHaveLength(2);
    expect(small.run.battle?.drawPileIds).toHaveLength(0);
    const wide = beginBattle({ ...base, deckMotifIds: motifs.map((item) => item.id) }, profile, 'land', SHORT_RUN_CONFIG, catalog);
    expect(wide.run.battle?.visibleHandIds).toHaveLength(5);
    expect(wide.run.battle?.drawPileIds).toHaveLength(1);
  });

  it('awards one card and still conquers a land that has nothing new', () => {
    const motifs = [motif('keep', '2'), motif('prize', '3', 'Wands')];
    const catalog = catalogOf(motifs);
    const profile = emptyProfile('test');
    const pending: RunState = {
      schemaVersion: 1,
      catalogVersion: 'test',
      seed: 'test',
      rngState: 1,
      configSnapshot: SHORT_RUN_CONFIG,
      allocationSnapshot: { hands: 0, discards: 0, lives: 0 },
      worldMotifIds: ['keep', 'prize'],
      regions: [
        region('home', 0, ['land'], ['keep']),
        region('land', 1, ['home', 'next'], ['prize']),
        region('next', 2, ['land'], ['keep']),
      ],
      startRegionId: 'home',
      conqueredRegionIds: ['home'],
      deckMotifIds: ['keep', 'spare', 'extra'],
      livesRemaining: 2,
      status: 'active',
      handsPlayed: 1,
      pendingRewardRegionId: 'land',
    };
    expect(rewardOptions(pending).canAdd).toBe(true);
    expect(rewardOptions(pending).canRemove).toBe(false);
    const added = resolveReward(pending, profile, { type: 'add', motifId: 'prize' }, catalog);
    expect(added.run.deckMotifIds).toEqual(['keep', 'spare', 'extra', 'prize']);
    expect(added.run.conqueredRegionIds).toContain('land');
    expect(added.run.pendingRewardRegionId).toBeUndefined();
    const stalled: RunState = { ...pending, pendingRewardRegionId: 'next', deckMotifIds: ['keep'] };
    expect(rewardOptions(stalled).canAdd).toBe(false);
    const moved = resolveReward(stalled, profile, { type: 'continue' }, catalog);
    expect(moved.run.deckMotifIds).toEqual(['keep']);
    expect(moved.run.conqueredRegionIds).toContain('next');
    expect(moved.run.status).toBe('active');
  });
});
