import { describe, expect, it } from 'vitest';
import { commitDiscard, commitPlay, pileIds, resolveReward, returnToMap, selectAll } from './game';
import { emptyProfile } from './progression';
import { SHORT_RUN_CONFIG } from './config';
import type { Catalog, Profile, RunState, SimilarityTables } from './types';

const motifIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function catalog(): Catalog {
  return {
    catalogVersion: 'test',
    embeddingModel: 'test',
    embeddingDim: 2,
    similarityScale: 10000,
    textThreshold: 0.5,
    imageBase: '',
    counts: { motifs: 8, majors: 1, minors: 7, deities: 1, texts: 2, missingImages: 0 },
    motifs: motifIds.map((id, index) => ({
      id,
      name: id,
      description: '',
      chapter: 'A',
      image: '',
      tarotIndex: index,
      tarotName: index === 0 ? 'The Magician' : 'Ace of Cups',
      arcana: index === 0 ? 'major' : 'minor',
      rank: 'A',
      suit: index === 0 ? null : 'Cups',
      wild: index === 0,
    })),
    deities: [{ id: 'zeus', name: 'Jupiter', pantheon: 'roman', description: '' }],
    texts: [
      { id: 'tale-1', name: 'First Tale', description: 'A long story.', source: 'A book', provenance: 'Scotland', dataSource: 'Folktexts' },
      { id: 'tale-2', name: 'Second Tale', description: 'Another story.', source: 'A book', provenance: 'Scotland', dataSource: 'Folktexts' },
    ],
    motifIndex: new Map(motifIds.map((id, index) => [id, index])),
    deityIndex: new Map([['zeus', 0]]),
    textIndex: new Map([['tale-1', 0], ['tale-2', 1]]),
  };
}

function tables(): SimilarityTables {
  const motifText = new Int16Array(8 * 2);
  motifText[0] = 8000;
  motifText[2] = 8000;
  return {
    nMotifs: 8,
    nDeities: 1,
    nTexts: 2,
    scale: 10000,
    motifDeity: new Int16Array(8),
    motifText,
    deityDeity: new Int16Array([10000]),
  };
}

function run(): RunState {
  return {
    schemaVersion: 1,
    catalogVersion: 'test',
    seed: 'test',
    rngState: 99,
    configSnapshot: SHORT_RUN_CONFIG,
    allocationSnapshot: { hands: 0, discards: 0, lives: 0 },
    worldMotifIds: motifIds,
    regions: [{
      id: 'region-zeus',
      deityId: 'zeus',
      motifIds,
      centroid: [0, 0],
      polygon: [[0, 0], [1, 0], [1, 1]],
      neighborRegionIds: [],
      hopDistance: 1,
      targetScore: 50,
    }],
    startRegionId: 'home',
    conqueredRegionIds: ['home'],
    deckMotifIds: motifIds.slice(0, 6),
    livesRemaining: 2,
    status: 'active',
    handsPlayed: 0,
    battle: {
      regionId: 'region-zeus',
      drawPileIds: ['e', 'f'],
      discardPileIds: [],
      playedPileIds: [],
      visibleHandIds: ['a', 'b', 'c', 'd'],
      selectedIds: ['a', 'b'],
      handsRemaining: 1,
      discardsRemaining: 1,
      accumulatedScore: 0,
      targetScore: 50,
      status: 'active',
    },
  };
}

describe('battle actions', () => {
  it('reveals played cards, scores them, and keeps every deck card in one pile', () => {
    const before = run();
    const profile = emptyProfile('test');
    const step = commitPlay(before, profile, catalog(), tables());
    expect(step.profile.discoveredMotifIds).toEqual(['a', 'b']);
    expect(step.profile.discoveredTextIds).toEqual(['tale-1']);
    expect(step.run.lastPlay?.folkloreBonus).toBe(0);
    expect(step.run.lastPlay?.pokerSubtotal).toBeGreaterThan(0);
    expect(step.run.battle && pileIds(step.run.battle).sort()).toEqual(before.deckMotifIds.slice().sort());
    expect(step.run.pendingRewardRegionId).toBe('region-zeus');
  });

  it('plays the whole hand, and no more than the play cap', () => {
    const before = run();
    before.battle!.selectedIds = [];
    before.battle!.visibleHandIds = ['a', 'b'];
    before.battle!.targetScore = 100000;
    const played = commitPlay(selectAll(before), emptyProfile('test'), catalog(), tables());
    expect(played.run.lastPlay?.motifIds).toEqual(['a', 'b']);
    const wide = run();
    wide.battle!.selectedIds = ['c'];
    wide.battle!.visibleHandIds = ['a', 'b', 'c', 'd', 'e', 'f'];
    wide.configSnapshot = {
      ...wide.configSnapshot,
      combat: { ...wide.configSnapshot.combat, maxCardsPerPlay: 5 },
    };
    expect(selectAll(wide).battle?.selectedIds).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('does not discover a discarded card', () => {
    const before = run();
    before.battle!.targetScore = 100000;
    before.battle!.handsRemaining = 2;
    const step = commitDiscard(before, emptyProfile('test'));
    expect(step.profile.discoveredMotifIds).toEqual([]);
    expect(step.run.lastPlay?.kind).toBe('discard');
    expect(step.run.battle && pileIds(step.run.battle).sort()).toEqual(before.deckMotifIds.slice().sort());
    expect(step.run.battle?.discardsRemaining).toBe(0);
  });

  it('reshuffles played and discarded cards without cloning the visible hand', () => {
    const before = run();
    before.battle!.targetScore = 100000;
    before.battle!.handsRemaining = 3;
    before.battle!.drawPileIds = [];
    before.battle!.playedPileIds = ['g'];
    before.battle!.discardPileIds = ['h'];
    before.deckMotifIds = ['a', 'b', 'c', 'd', 'g', 'h'];
    const step = commitPlay(before, emptyProfile('test'), catalog(), tables());
    const battle = step.run.battle!;
    const piles = pileIds(battle);
    expect(piles.sort()).toEqual(['a', 'b', 'c', 'd', 'g', 'h'].sort());
    expect(new Set(piles).size).toBe(piles.length);
    expect(battle.playedPileIds.includes('g') || battle.drawPileIds.includes('g') || battle.visibleHandIds.includes('g')).toBe(true);
  });

  it('consumes one life on defeat and keeps discoveries', () => {
    const before = run();
    before.battle!.targetScore = 100000;
    before.battle!.selectedIds = ['c'];
    const step = commitPlay(before, emptyProfile('test'), catalog(), tables());
    expect(step.run.battle?.status).toBe('lost');
    expect(step.run.livesRemaining).toBe(1);
    expect(step.profile.discoveredMotifIds).toEqual(['c']);
    const mapped = returnToMap(step.run);
    expect(mapped.battle).toBeUndefined();
    expect(mapped.status).toBe('active');
  });

  it('grants a conquest reward once', () => {
    const before = run();
    const profile: Profile = emptyProfile('test');
    const won = commitPlay(before, profile, catalog(), tables());
    const added = resolveReward(won.run, won.profile, { type: 'add', motifId: 'g' });
    expect(added.run.deckMotifIds).toContain('g');
    expect(added.run.conqueredRegionIds).toContain('region-zeus');
    expect(added.run.pendingRewardRegionId).toBeUndefined();
    const again = resolveReward(added.run, added.profile, { type: 'add', motifId: 'h' });
    expect(again.run.deckMotifIds.filter((id) => id === 'h')).toHaveLength(0);
  });
});
