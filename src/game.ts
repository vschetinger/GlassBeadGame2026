import { validateConfig } from './config';
import { chipsForRank, evaluatePoker, type PokerScore } from './poker';
import { resonate } from './resonance';
import { mulberry32, rngFromSeed, type Rng } from './rng';
import type {
  BalanceConfig,
  BattleState,
  Catalog,
  LastPlay,
  MotifRecord,
  Profile,
  RunState,
  SimilarityTables,
} from './types';
import { generateRegions } from './worldgen';

export interface StepResult {
  run: RunState;
  profile: Profile;
}

function unique(existing: string[], incoming: string[]): string[] {
  const seen = new Set(existing);
  const next = existing.slice();
  for (const id of incoming) {
    if (!seen.has(id)) {
      seen.add(id);
      next.push(id);
    }
  }
  return next;
}

function withEncounters(profile: Profile, ids: string[]): Profile {
  const encounteredMotifIds = unique(profile.encounteredMotifIds, ids);
  if (encounteredMotifIds.length === profile.encounteredMotifIds.length) return profile;
  return { ...profile, encounteredMotifIds };
}

function cloneBattle(battle: BattleState): BattleState {
  return {
    ...battle,
    drawPileIds: battle.drawPileIds.slice(),
    discardPileIds: battle.discardPileIds.slice(),
    playedPileIds: battle.playedPileIds.slice(),
    visibleHandIds: battle.visibleHandIds.slice(),
    selectedIds: battle.selectedIds.slice(),
  };
}

function drawUp(battle: BattleState, rng: Rng, config: BalanceConfig) {
  const size = config.combat.visibleHandSize;
  while (battle.visibleHandIds.length < size) {
    if (battle.drawPileIds.length === 0) {
      if (!config.combat.reshuffleOnEmpty) break;
      const pool = battle.discardPileIds.concat(battle.playedPileIds);
      if (pool.length === 0) break;
      battle.drawPileIds = rng.shuffle(pool);
      battle.discardPileIds = [];
      battle.playedPileIds = [];
    }
    const next = battle.drawPileIds.pop();
    if (!next) break;
    battle.visibleHandIds.push(next);
  }
}

export function attackableRegionIds(run: RunState): string[] {
  const conquered = new Set(run.conqueredRegionIds);
  if (conquered.size === 0) return [run.startRegionId];
  return run.regions
    .filter((region) => !conquered.has(region.id) && region.neighborRegionIds.some((id) => conquered.has(id)))
    .map((region) => region.id);
}

export function createRun(
  seed: string,
  config: BalanceConfig,
  profile: Profile,
  catalog: Catalog,
  tables: SimilarityTables,
): StepResult {
  const errors = validateConfig(config);
  if (errors.length) throw new Error(errors.join(' '));
  const rng = rngFromSeed(seed.trim() || 'glass');
  const { regions, worldMotifIds } = generateRegions(
    rng,
    config,
    catalog.motifs.map((motif) => motif.id),
    catalog.deities.map((deity) => deity.id),
    tables,
  );
  const start = regions.find((region) => region.hopDistance === 0);
  if (!start) throw new Error('World generation did not choose a home region.');
  const conquered = config.world.startRegionInitiallyConquered ? [start.id] : [];
  const deckMotifIds = rng.shuffle(worldMotifIds).slice(0, config.deck.startingSize);
  const run: RunState = {
    schemaVersion: 1,
    catalogVersion: catalog.catalogVersion,
    seed: seed.trim() || 'glass',
    rngState: rng.state(),
    configSnapshot: config,
    allocationSnapshot: { ...profile.upgradeAllocation },
    worldMotifIds,
    regions,
    startRegionId: start.id,
    conqueredRegionIds: conquered,
    deckMotifIds,
    livesRemaining: config.combat.baseLives + profile.upgradeAllocation.lives,
    status: 'active',
    handsPlayed: 0,
  };
  return {
    run,
    profile: {
      ...profile,
      statistics: { ...profile.statistics, runs: profile.statistics.runs + 1 },
    },
  };
}

export function inspectRegion(profile: Profile, run: RunState, regionId: string): Profile {
  const region = run.regions.find((item) => item.id === regionId);
  if (!region) return profile;
  return withEncounters(profile, region.motifIds);
}

export function beginBattle(run: RunState, profile: Profile, regionId: string, config: BalanceConfig): StepResult {
  if (run.status !== 'active' || run.pendingRewardRegionId || run.battle?.status === 'active') return { run, profile };
  if (!attackableRegionIds(run).includes(regionId)) return { run, profile };
  const region = run.regions.find((item) => item.id === regionId);
  if (!region) return { run, profile };
  const rng = mulberry32(run.rngState);
  const battle: BattleState = {
    regionId,
    drawPileIds: rng.shuffle(run.deckMotifIds),
    discardPileIds: [],
    playedPileIds: [],
    visibleHandIds: [],
    selectedIds: [],
    handsRemaining: config.combat.baseHands + run.allocationSnapshot.hands,
    discardsRemaining: config.combat.baseDiscards + run.allocationSnapshot.discards,
    accumulatedScore: 0,
    targetScore: region.targetScore,
    status: 'active',
  };
  drawUp(battle, rng, config);
  return {
    run: { ...run, rngState: rng.state(), battle, lastPlay: undefined },
    profile: withEncounters(profile, battle.visibleHandIds),
  };
}

export function toggleSelect(run: RunState, motifId: string): RunState {
  const battle = run.battle;
  if (!battle || battle.status !== 'active') return run;
  if (!battle.visibleHandIds.includes(motifId)) return run;
  const selected = battle.selectedIds.includes(motifId)
    ? battle.selectedIds.filter((id) => id !== motifId)
    : battle.selectedIds.length >= run.configSnapshot.combat.maxCardsPerPlay
      ? battle.selectedIds
      : battle.selectedIds.concat(motifId);
  return { ...run, battle: { ...battle, selectedIds: selected } };
}

function finishBattle(run: RunState, profile: Profile, battle: BattleState): StepResult {
  if (battle.status === 'won') {
    return {
      run: { ...run, battle, pendingRewardRegionId: battle.regionId },
      profile,
    };
  }
  const livesRemaining = run.livesRemaining - 1;
  const lost = livesRemaining <= 0;
  return {
    run: {
      ...run,
      battle: { ...battle, status: 'lost' },
      livesRemaining,
      status: lost ? 'lost' : 'active',
    },
    profile: lost
      ? { ...profile, statistics: { ...profile.statistics, losses: profile.statistics.losses + 1 } }
      : profile,
  };
}

export function commitPlay(
  run: RunState,
  profile: Profile,
  catalog: Catalog,
  tables: SimilarityTables,
): StepResult {
  const battle = run.battle;
  if (!battle || battle.status !== 'active' || battle.selectedIds.length < 1 || battle.handsRemaining < 1) {
    return { run, profile };
  }
  const config = run.configSnapshot;
  const selected = battle.selectedIds.slice();
  const cards = selected.map((id) => {
    const motif = catalog.motifs[catalog.motifIndex.get(id)!];
    return {
      id,
      rank: motif.rank,
      suit: motif.suit,
      wild: motif.wild,
      chips: chipsForRank(motif.rank),
    };
  });
  const poker = evaluatePoker(cards);
  const threshold = config.texts.similarityThreshold ?? catalog.textThreshold;
  const resonance = resonate(catalog, tables, {
    playedMotifIds: selected,
    discoveredTextIds: new Set(profile.discoveredTextIds),
    config,
    threshold,
  });
  const total = poker.pokerSubtotal + resonance.bonus;
  const rng = mulberry32(run.rngState);
  const nextBattle = cloneBattle(battle);
  nextBattle.visibleHandIds = nextBattle.visibleHandIds.filter((id) => !selected.includes(id));
  nextBattle.playedPileIds = nextBattle.playedPileIds.concat(selected);
  nextBattle.selectedIds = [];
  nextBattle.accumulatedScore += total;
  nextBattle.handsRemaining -= 1;
  const won = nextBattle.accumulatedScore >= nextBattle.targetScore;
  if (!won) drawUp(nextBattle, rng, config);
  nextBattle.status = won ? 'won' : 'active';

  const discoveredMotifIds = unique(profile.discoveredMotifIds, selected);
  const discoveredTextIds = unique(profile.discoveredTextIds, resonance.newlyUnlockedIds);
  let nextProfile: Profile = withEncounters(
    {
      ...profile,
      discoveredMotifIds,
      discoveredTextIds,
      encounteredMotifIds: unique(profile.encounteredMotifIds, selected),
    },
    nextBattle.visibleHandIds,
  );
  const lastPlay: LastPlay = {
    kind: 'play',
    stamp: Date.now(),
    motifIds: selected,
    categoryLabel: poker.label,
    scoringCardIds: poker.scoringCardIds,
    baseChips: poker.baseChips,
    cardChips: poker.cardChips,
    multiplier: poker.multiplier,
    pokerSubtotal: poker.pokerSubtotal,
    folkloreBonus: resonance.bonus,
    folklore: resonance.hits,
    total,
    discoveredMotifIds: selected.filter((id) => !profile.discoveredMotifIds.includes(id)),
    unlockedTextIds: resonance.newlyUnlockedIds,
  };
  let nextRun: RunState = {
    ...run,
    rngState: rng.state(),
    battle: nextBattle,
    handsPlayed: run.handsPlayed + 1,
    lastPlay,
  };
  if (won) return finishBattle(nextRun, nextProfile, nextBattle);
  if (nextBattle.handsRemaining <= 0) return finishBattle(nextRun, nextProfile, nextBattle);
  return { run: nextRun, profile: nextProfile };
}

export function commitDiscard(run: RunState, profile: Profile): StepResult {
  const battle = run.battle;
  const config = run.configSnapshot;
  if (!battle || battle.status !== 'active' || battle.selectedIds.length < 1 || battle.discardsRemaining < 1) {
    return { run, profile };
  }
  const selected = battle.selectedIds.slice();
  const rng = mulberry32(run.rngState);
  const nextBattle = cloneBattle(battle);
  nextBattle.visibleHandIds = nextBattle.visibleHandIds.filter((id) => !selected.includes(id));
  nextBattle.discardPileIds = nextBattle.discardPileIds.concat(selected);
  nextBattle.selectedIds = [];
  nextBattle.discardsRemaining -= 1;
  drawUp(nextBattle, rng, config);
  return {
    run: {
      ...run,
      rngState: rng.state(),
      battle: nextBattle,
      lastPlay: { kind: 'discard', motifIds: selected },
    },
    profile: withEncounters(profile, nextBattle.visibleHandIds),
  };
}

export function returnToMap(run: RunState): RunState {
  if (run.battle?.status !== 'lost' || run.status === 'lost') return { ...run, battle: undefined };
  return { ...run, battle: undefined };
}

export function rewardOptions(run: RunState): { canAdd: boolean; canRemove: boolean; addableIds: string[]; removableIds: string[] } {
  const region = run.regions.find((item) => item.id === run.pendingRewardRegionId);
  const addableIds = region ? region.motifIds.filter((id) => !run.deckMotifIds.includes(id)) : [];
  const removableIds = run.deckMotifIds.length > run.configSnapshot.deck.minimumSize ? run.deckMotifIds.slice() : [];
  return {
    canAdd: addableIds.length > 0,
    canRemove: removableIds.length > 0,
    addableIds,
    removableIds,
  };
}

export function resolveReward(
  run: RunState,
  profile: Profile,
  choice: { type: 'add'; motifId: string } | { type: 'remove'; motifId: string } | { type: 'continue' },
): StepResult {
  if (!run.pendingRewardRegionId || run.status !== 'active') return { run, profile };
  const options = rewardOptions(run);
  let deck = run.deckMotifIds.slice();
  if (choice.type === 'add') {
    if (!options.addableIds.includes(choice.motifId)) return { run, profile };
    deck = deck.concat(choice.motifId);
  } else if (choice.type === 'remove') {
    if (!options.removableIds.includes(choice.motifId)) return { run, profile };
    deck = deck.filter((id) => id !== choice.motifId);
  } else if (options.canAdd || options.canRemove) {
    return { run, profile };
  }
  const conquered = unique(run.conqueredRegionIds, [run.pendingRewardRegionId]);
  const won = conquered.length === run.regions.length;
  return {
    run: {
      ...run,
      deckMotifIds: deck,
      conqueredRegionIds: conquered,
      pendingRewardRegionId: undefined,
      battle: undefined,
      status: won ? 'won' : 'active',
      lastPlay: undefined,
    },
    profile: won
      ? { ...profile, statistics: { ...profile.statistics, wins: profile.statistics.wins + 1 } }
      : profile,
  };
}

export function previewPlay(
  run: RunState,
  profile: Profile,
  catalog: Catalog,
  tables: SimilarityTables,
): { poker: PokerScore; folkloreBonus: number } | null {
  const battle = run.battle;
  if (!battle || battle.selectedIds.length < 1) return null;
  if (battle.selectedIds.some((id) => !profile.discoveredMotifIds.includes(id))) return null;
  const cards = battle.selectedIds.map((id) => {
    const motif = catalog.motifs[catalog.motifIndex.get(id)!] as MotifRecord;
    return { id, rank: motif.rank, suit: motif.suit, wild: motif.wild, chips: chipsForRank(motif.rank) };
  });
  const poker = evaluatePoker(cards);
  const resonance = resonate(catalog, tables, {
    playedMotifIds: battle.selectedIds,
    discoveredTextIds: new Set(profile.discoveredTextIds),
    config: run.configSnapshot,
    threshold: run.configSnapshot.texts.similarityThreshold ?? catalog.textThreshold,
  });
  return { poker, folkloreBonus: resonance.bonus };
}

export function pileIds(battle: BattleState): string[] {
  return battle.visibleHandIds.concat(battle.drawPileIds, battle.discardPileIds, battle.playedPileIds);
}
