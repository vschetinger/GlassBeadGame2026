import type { BalanceConfig } from './types';

export const DEFAULT_CONFIG: BalanceConfig = {
  world: {
    motifsPerRun: 32,
    regionsPerRun: 8,
    optimizationSwaps: 3,
    optimizationNoise: 0,
    minMotifsPerRegion: 3,
    startRegionInitiallyConquered: true,
  },
  deck: { startingSize: 2, minimumSize: 2, allowDuplicates: false, reward: 'add' },
  combat: {
    visibleHandSize: 5,
    maxCardsPerPlay: 5,
    baseHands: 4,
    baseDiscards: 3,
    baseLives: 2,
    reshuffleOnEmpty: true,
  },
  difficulty: {
    baseTarget: 100,
    hopMultiplier: 1.5,
    expectedRegionSize: 4,
    sizeSlope: 0.015,
    sizeMin: 0.9,
    sizeMax: 1.15,
    scoreStep: 10,
    targetModel: 'potential',
    waveLow: 0.45,
    waveHigh: 1.15,
  },
  texts: {
    minResonantCards: 2,
    similarityThreshold: null,
    baseBonus: 20,
    perExtraCardBonus: 10,
    maxActiveBonusesPerHand: 2,
    newDiscoveryScoresImmediately: false,
    bonusAppliedAfterPokerMultiplier: true,
  },
  progression: {
    pointThresholds: [10, 25, 50, 75, 100, 150, 200],
    respecBetweenRuns: true,
    upgrades: {
      hands: { cost: 2, max: 2 },
      discards: { cost: 1, max: 3 },
      lives: { cost: 3, max: 2 },
    },
  },
};

export const SHORT_RUN_CONFIG: BalanceConfig = {
  ...DEFAULT_CONFIG,
  world: { ...DEFAULT_CONFIG.world, motifsPerRun: 18, regionsPerRun: 5 },
};

export function validateConfig(config: BalanceConfig): string[] {
  const errors: string[] = [];
  const { world, deck, combat, difficulty, texts, progression } = config;
  if (world.motifsPerRun < world.regionsPerRun) errors.push('Need at least one motif per region.');
  if (world.regionsPerRun < 2) errors.push('A run needs at least two regions.');
  if (world.minMotifsPerRegion < 1) errors.push('Regions must be allowed to hold at least one motif.');
  if (world.minMotifsPerRegion * world.regionsPerRun > world.motifsPerRun) {
    errors.push('Not enough motifs to fill every region to its minimum.');
  }
  if (deck.reward !== 'add' && deck.reward !== 'either') errors.push('deck.reward must be add or either.');
  if (deck.startingSize < 1) errors.push('Starting deck must contain a card.');
  if (deck.minimumSize < 1 || deck.minimumSize > deck.startingSize) {
    errors.push('Minimum deck size must sit between 1 and the starting size.');
  }
  if (deck.startingSize > world.motifsPerRun) errors.push('Starting deck is larger than the world.');
  if (combat.visibleHandSize < 1 || combat.maxCardsPerPlay < 1) errors.push('Hand and play sizes must be positive.');
  if (combat.maxCardsPerPlay > 5) errors.push('Poker evaluation accepts at most five cards.');
  if (combat.baseHands < 1 || combat.baseDiscards < 0 || combat.baseLives < 1) {
    errors.push('A run needs at least one hand and one life.');
  }
  if (difficulty.baseTarget <= 0 || difficulty.hopMultiplier <= 1 || difficulty.scoreStep <= 0) {
    errors.push('Difficulty targets must grow from a positive base.');
  }
  if (difficulty.sizeMin <= 0 || difficulty.sizeMax < difficulty.sizeMin) errors.push('Size clamp is invalid.');
  if (difficulty.targetModel !== 'potential' && difficulty.targetModel !== 'hop') {
    errors.push('difficulty.targetModel must be potential or hop.');
  }
  if (difficulty.waveLow <= 0 || difficulty.waveLow > 1) errors.push('difficulty.waveLow must be above 0 and at most 1.');
  if (difficulty.waveHigh < difficulty.waveLow) errors.push('difficulty.waveHigh must be at least waveLow.');
  if (texts.minResonantCards < 2) errors.push('Text resonance requires two distinct motifs.');
  if (texts.baseBonus < 0 || texts.perExtraCardBonus < 0 || texts.maxActiveBonusesPerHand < 0) {
    errors.push('Text bonuses must be non-negative.');
  }
  for (const [name, upgrade] of Object.entries(progression.upgrades)) {
    if (upgrade.cost < 1 || upgrade.max < 0) errors.push(`Upgrade ${name} has an invalid cost or cap.`);
  }
  return errors;
}
