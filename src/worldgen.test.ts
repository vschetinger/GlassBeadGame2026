import { describe, expect, it } from 'vitest';
import { SHORT_RUN_CONFIG } from './config';
import { attackableRegionIds, createRun } from './game';
import { emptyProfile } from './progression';
import { rngFromSeed } from './rng';
import type { BalanceConfig, Catalog, SimilarityTables } from './types';
import { generateRegions, targetScore } from './worldgen';

function clusteredTables(): { motifIds: string[]; deityIds: string[]; tables: SimilarityTables } {
  const motifIds = ['m0', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7'];
  const deityIds = ['d0', 'd1', 'd2', 'd3'];
  const motifDeity = new Int16Array(8 * 4);
  for (let motif = 0; motif < 8; motif++) {
    for (let deity = 0; deity < 4; deity++) {
      const home = Math.floor(motif / 2) === deity;
      motifDeity[motif * 4 + deity] = home ? 9000 : 1000;
    }
  }
  const deityDeity = new Int16Array(16);
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) deityDeity[a * 4 + b] = a === b ? 10000 : 2000;
  }
  return {
    motifIds,
    deityIds,
    tables: {
      nMotifs: 8,
      nDeities: 4,
      nTexts: 1,
      scale: 10000,
      motifDeity,
      motifText: new Int16Array(8),
      deityDeity,
    },
  };
}

const config: BalanceConfig = {
  ...SHORT_RUN_CONFIG,
  world: { ...SHORT_RUN_CONFIG.world, motifsPerRun: 8, regionsPerRun: 4, optimizationSwaps: 1, minMotifsPerRegion: 1 },
  deck: { ...SHORT_RUN_CONFIG.deck, startingSize: 4, minimumSize: 2 },
};

describe('world generation', () => {
  it('is deterministic and keeps every region nonempty and connected', () => {
    const data = clusteredTables();
    const first = generateRegions(rngFromSeed('castalia'), config, data.motifIds, data.deityIds, data.tables);
    const second = generateRegions(rngFromSeed('castalia'), config, data.motifIds, data.deityIds, data.tables);
    expect(first.worldMotifIds).toEqual(second.worldMotifIds);
    expect(first.regions.map((region) => region.deityId)).toEqual(second.regions.map((region) => region.deityId));
    expect(first.regions.every((region) => region.motifIds.length >= 1)).toBe(true);
    const assigned = first.regions.flatMap((region) => region.motifIds).sort();
    expect(assigned).toEqual([...data.motifIds].sort());
    expect(new Set(assigned).size).toBe(8);
    expect(first.regions.filter((region) => region.hopDistance === 0)).toHaveLength(1);
    const byId = new Map(first.regions.map((region) => [region.id, region]));
    const seen = new Set<string>();
    const queue = [first.regions.find((region) => region.hopDistance === 0)!.id];
    while (queue.length) {
      const id = queue.pop()!;
      if (seen.has(id)) continue;
      seen.add(id);
      for (const next of byId.get(id)!.neighborRegionIds) queue.push(next);
    }
    expect(seen.size).toBe(4);
    for (const region of first.regions) {
      if (config.difficulty.targetModel === 'potential') {
        expect(region.targetScore).toBe(0);
        expect(region.targetLocked).toBe(false);
      } else if (region.hopDistance > 0) {
        expect(region.targetScore).toBeGreaterThanOrEqual(targetScore(region.hopDistance, region.motifIds.length, config));
      }
    }
  });

  it('raises the score target with hop distance and, more gently, with region size', () => {
    const small = targetScore(1, 1, config);
    const large = targetScore(1, 20, config);
    const farther = targetScore(3, 10, config);
    const nearer = targetScore(1, 10, config);
    expect(large).toBeGreaterThan(small);
    expect(farther).toBeGreaterThan(nearer * 2);
  });
});

describe('run creation', () => {
  it('starts from a conquered home and a deck drawn from that world', () => {
    const data = clusteredTables();
    const catalog = {
      catalogVersion: 'test',
      embeddingModel: 'test',
      embeddingDim: 2,
      similarityScale: 10000,
      textThreshold: 0.8,
      imageBase: '',
      counts: { motifs: 8, majors: 0, minors: 8, deities: 4, texts: 0, missingImages: 0 },
      motifs: data.motifIds.map((id, index) => ({
        id,
        name: id,
        description: '',
        chapter: '',
        image: '',
        tarotIndex: index,
        tarotName: 'Two of Cups',
        arcana: 'minor' as const,
        rank: '2' as const,
        suit: 'Cups' as const,
        wild: false,
      })),
      deities: data.deityIds.map((id) => ({ id, name: id, pantheon: 'roman', description: '' })),
      texts: [],
      motifIndex: new Map(data.motifIds.map((id, index) => [id, index])),
      deityIndex: new Map(data.deityIds.map((id, index) => [id, index])),
      textIndex: new Map(),
    } satisfies Catalog;
    const { run } = createRun('castalia', config, emptyProfile('test'), catalog, data.tables);
    expect(run.conqueredRegionIds).toEqual([run.startRegionId]);
    expect(run.deckMotifIds).toHaveLength(4);
    expect(run.deckMotifIds.every((id) => run.worldMotifIds.includes(id))).toBe(true);
    expect(new Set(run.deckMotifIds).size).toBe(run.deckMotifIds.length);
    const again = createRun('castalia', config, emptyProfile('test'), catalog, data.tables);
    expect(again.run.regions.map((region) => region.deityId)).toEqual(run.regions.map((region) => region.deityId));
    expect(again.run.deckMotifIds).toEqual(run.deckMotifIds);
  });

  it('draws a two-card deck from home and freezes an attainable first wave', () => {
    const data = clusteredTables();
    const catalog = {
      catalogVersion: 'test',
      embeddingModel: 'test',
      embeddingDim: 2,
      similarityScale: 10000,
      textThreshold: 0.8,
      imageBase: '',
      counts: { motifs: 8, majors: 0, minors: 8, deities: 4, texts: 0, missingImages: 0 },
      motifs: data.motifIds.map((id, index) => ({
        id,
        name: id,
        description: '',
        chapter: '',
        image: '',
        tarotIndex: index,
        tarotName: 'Two of Cups',
        arcana: 'minor' as const,
        rank: '2' as const,
        suit: 'Cups' as const,
        wild: false,
      })),
      deities: data.deityIds.map((id) => ({ id, name: id, pantheon: 'roman', description: '' })),
      texts: [],
      motifIndex: new Map(data.motifIds.map((id, index) => [id, index])),
      deityIndex: new Map(data.deityIds.map((id, index) => [id, index])),
      textIndex: new Map(),
    } satisfies Catalog;
    const small = { ...config, deck: { ...config.deck, startingSize: 2, minimumSize: 2 } };
    const { run } = createRun('castalia', small, emptyProfile('test'), catalog, data.tables);
    const home = run.regions.find((region) => region.id === run.startRegionId)!;
    expect(run.deckMotifIds).toHaveLength(2);
    expect(run.deckMotifIds.every((id) => home.motifIds.includes(id))).toBe(true);
    const open = attackableRegionIds(run);
    expect(open.length).toBeGreaterThan(0);
    const perfect = (10 + 2 + 2) * 2 * small.combat.baseHands;
    for (const id of open) {
      const region = run.regions.find((item) => item.id === id)!;
      expect(region.targetLocked).toBe(true);
      expect(region.targetScore).toBeGreaterThan(0);
    }
    const easiest = Math.min(...open.map((id) => run.regions.find((item) => item.id === id)!.targetScore));
    expect(easiest).toBeLessThanOrEqual(perfect);
    if (open.length > 1) {
      const hardest = Math.max(...open.map((id) => run.regions.find((item) => item.id === id)!.targetScore));
      expect(hardest).toBeGreaterThan(easiest);
    }
    for (const region of run.regions) {
      if (region.id === run.startRegionId || open.includes(region.id)) continue;
      expect(region.targetLocked).toBe(false);
    }
  });
});
