import type { BalanceConfig } from './types';

export const DEFAULT_CONFIG: BalanceConfig = {
  world: {
    motifsPerRun: 200,
    regionsPerRun: 20,
    optimizationSwaps: 3,
    optimizationNoise: 0,
    minMotifsPerRegion: 1,
    startRegionInitiallyConquered: true,
  },
  deck: { startingSize: 15, minimumSize: 8, allowDuplicates: false },
  combat: {
    visibleHandSize: 8,
    maxCardsPerPlay: 5,
    baseHands: 4,
    baseDiscards: 3,
    baseLives: 2,
    reshuffleOnEmpty: true,
  },
  difficulty: {
    baseTarget: 100,
    hopMultiplier: 1.5,
    expectedRegionSize: 10,
    sizeSlope: 0.015,
    sizeMin: 0.9,
    sizeMax: 1.15,
    scoreStep: 10,
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
  world: { ...DEFAULT_CONFIG.world, motifsPerRun: 60, regionsPerRun: 6 },
  difficulty: { ...DEFAULT_CONFIG.difficulty, baseTarget: 70 },
};

export function validateConfig(config: BalanceConfig): string[] {
  const errors: string[] = [];
  const { world, deck, combat, difficulty, texts, progression } = config;
  if (world.motifsPerRun < world.regionsPerRun) errors.push('Need at least one motif per region.');
  if (world.regionsPerRun < 2) errors.push('A run needs at least two regions.');
  if (world.minMotifsPerRegion < 1) errors.push('Regions must be allowed to hold at least one motif.');
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
  if (texts.minResonantCards < 2) errors.push('Text resonance requires two distinct motifs.');
  if (texts.baseBonus < 0 || texts.perExtraCardBonus < 0 || texts.maxActiveBonusesPerHand < 0) {
    errors.push('Text bonuses must be non-negative.');
  }
  for (const [name, upgrade] of Object.entries(progression.upgrades)) {
    if (upgrade.cost < 1 || upgrade.max < 0) errors.push(`Upgrade ${name} has an invalid cost or cap.`);
  }
  return errors;
}
