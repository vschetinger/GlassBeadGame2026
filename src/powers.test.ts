import { describe, expect, it } from 'vitest';
import { SHORT_RUN_CONFIG } from './config';
import { lockFrontier, resolveReward } from './game';
import { chipValue } from './games/load';
import { guideContent } from './guide/load';
import { parseNote } from './guide/parse';
import { awardPowers, grantsFor, powerOffers, togglePower } from './guide/skills';
import { emptyProfile } from './progression';
import { applyGrants, evaluatePoker, type PokerCard } from './poker';
import type { Catalog, MotifRecord, PokerRank, RunState, Suit } from './types';

const notes = guideContent.notes;

function card(id: string, rank: PokerRank, suit: Suit, chips = chipValue(rank)): PokerCard {
  return { id, rank, suit, wild: false, chips };
}

function score(cards: PokerCard[], powers: string[] = [], powersOff: string[] = []) {
  const dealt = evaluatePoker(cards);
  return applyGrants(dealt, grantsFor(notes, emptyProfile('test'), dealt.category, { powers, powersOff }));
}

function run(over: Partial<RunState> = {}): RunState {
  return {
    schemaVersion: 1,
    catalogVersion: 'test',
    seed: 'test',
    rngState: 1,
    configSnapshot: SHORT_RUN_CONFIG,
    allocationSnapshot: { hands: 0, discards: 0, lives: 0 },
    worldMotifIds: ['a', 'b'],
    regions: [
      {
        id: 'home',
        deityId: 'home',
        motifIds: [],
        centroid: [0, 0],
        polygon: [[0, 0], [1, 0], [0, 1]],
        neighborRegionIds: ['land'],
        hopDistance: 0,
        targetScore: 0,
        targetLocked: true,
      },
      {
        id: 'land',
        deityId: 'Q1150',
        motifIds: [],
        centroid: [1, 0],
        polygon: [[0, 0], [1, 0], [0, 1]],
        neighborRegionIds: ['home', 'deep'],
        hopDistance: 1,
        targetScore: 10,
        targetLocked: true,
      },
    ],
    startRegionId: 'home',
    conqueredRegionIds: ['home'],
    deckMotifIds: ['a', 'b'],
    livesRemaining: 2,
    status: 'active',
    handsPlayed: 1,
    powers: [],
    powersOff: [],
    pendingRewardRegionId: 'land',
    ...over,
  };
}

describe('god powers', () => {
  it('binds each prototype to its catalog id and keeps the player sentence', () => {
    const mercury = notes.find((note) => note.id === 'skill.mercury-path');
    const juno = notes.find((note) => note.id === 'skill.juno-pair');
    const vulcan = notes.find((note) => note.id === 'skill.vulcan-forge');
    expect(mercury?.god).toBe('Q1150');
    expect(juno?.god).toBe('Q125046');
    expect(vulcan?.god).toBe('Q4640');
    expect(powerOffers(notes, 'Q1150')).toEqual([
      { id: 'skill.mercury-path', title: "Mercury's path", text: 'Your high card hands gain 6 chips before the multiplier.' },
    ]);
    expect(powerOffers(notes, 'Q4649')).toEqual([]);
    expect(mercury?.body.includes('ENGINE')).toBe(false);
    const parsed = parseNote('---\nid: skill.sample\nkind: skill\nwhen: pair\nchips: 1\ngod: Q1\n---\n\nPairs gain 1 chip.\n');
    expect(parsed.warnings).toEqual([]);
    expect(parsed.note?.god).toBe('Q1');
  });

  it('scores an earned power, and a library copy of that power does not', () => {
    const high = [card('a', '3', 'Cups')];
    const plain = score(high);
    const powered = score(high, ['skill.mercury-path']);
    expect(plain.pokerSubtotal).toBe(8);
    expect(powered.skillChips).toBe(6);
    expect(powered.pokerSubtotal).toBe(14);
    const pair = score([card('a', '2', 'Cups'), card('b', '2', 'Wands')], ['skill.juno-pair']);
    expect(pair.multiplier).toBe(3);
    expect(pair.pokerSubtotal).toBe(42);
    const profile = emptyProfile('test');
    profile.guide = { beat: 'playing', dismissed: [], known: ['skill.mercury-path'], off: [] };
    expect(grantsFor(notes, profile, 'highCard', { powers: [] })).toEqual([]);
  });

  it('awards the power on victory and lets the player switch it off', () => {
    const profile = emptyProfile('test');
    const won = resolveReward(run(), profile, { type: 'continue' });
    expect(won.run.powers).toEqual(['skill.mercury-path']);
    expect(won.profile.guide?.known ?? []).not.toContain('skill.mercury-path');
    expect(won.run.conqueredRegionIds).toContain('land');
    const quiet = togglePower(won.run, 'skill.mercury-path');
    expect(grantsFor(notes, profile, 'highCard', quiet)).toEqual([]);
    const restored = togglePower(quiet, 'skill.mercury-path');
    expect(grantsFor(notes, profile, 'highCard', restored).map((grant) => grant.chips)).toEqual([6]);
    const again = awardPowers(restored, 'Q1150', notes);
    expect(again.powers).toEqual(['skill.mercury-path']);
  });

  it('prices a newly opened land with the power and leaves the locked land alone', () => {
    const motifs: MotifRecord[] = [
      { id: 'low2', name: 'low2', description: '', chapter: '', image: '', tarotIndex: 0, tarotName: '2', arcana: 'minor', rank: '2', suit: 'Cups', wild: false },
      { id: 'low3', name: 'low3', description: '', chapter: '', image: '', tarotIndex: 1, tarotName: '3', arcana: 'minor', rank: '3', suit: 'Wands', wild: false },
    ];
    const catalog: Catalog = {
      catalogVersion: 'test',
      embeddingModel: 'test',
      embeddingDim: 2,
      similarityScale: 10000,
      textThreshold: 0.5,
      imageBase: '',
      counts: { motifs: 2, majors: 0, minors: 2, deities: 0, texts: 0, missingImages: 0 },
      motifs,
      deities: [],
      texts: [],
      motifIndex: new Map(motifs.map((item, index) => [item.id, index])),
      deityIndex: new Map(),
      textIndex: new Map(),
    };
    const profile = emptyProfile('test');
    const base = run({
      pendingRewardRegionId: undefined,
      deckMotifIds: ['low2', 'low3'],
      regions: [
        { ...run().regions[0], neighborRegionIds: ['near'] },
        { ...run().regions[1], id: 'near', deityId: 'near', neighborRegionIds: ['home', 'deep'], targetScore: 0, targetLocked: false },
        { ...run().regions[1], id: 'deep', deityId: 'Q4640', neighborRegionIds: ['near'], hopDistance: 2, targetScore: 0, targetLocked: false },
      ],
    });
    const first = lockFrontier(base, profile, catalog);
    const near = first.regions.find((region) => region.id === 'near')!;
    expect(near.targetLocked).toBe(true);
    const grown = lockFrontier({
      ...first,
      powers: ['skill.mercury-path'],
      conqueredRegionIds: ['home', 'near'],
    }, profile, catalog);
    expect(grown.regions.find((region) => region.id === 'near')!.targetScore).toBe(near.targetScore);
    const deep = grown.regions.find((region) => region.id === 'deep')!;
    expect(deep.targetLocked).toBe(true);
    expect(deep.targetScore).toBeGreaterThan(near.targetScore);
  });
});
