export const POKER_RANKS = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Page', 'Knight', 'Queen', 'King', 'A',
] as const;

export type PokerRank = (typeof POKER_RANKS)[number];
export type Suit = 'Cups' | 'Pentacles' | 'Swords' | 'Wands';

export interface MotifRecord {
  id: string;
  name: string;
  description: string;
  chapter: string;
  image: string;
  tarotIndex: number;
  tarotName: string;
  arcana: 'major' | 'minor';
  rank: PokerRank;
  suit: Suit | null;
  wild: boolean;
}

export interface DeityRecord {
  id: string;
  name: string;
  pantheon: string;
  description: string;
}

export interface TextRecord {
  id: string;
  name: string;
  description: string;
  source: string;
  provenance: string;
  dataSource: string;
}

export interface CatalogFile {
  catalogVersion: string;
  embeddingModel: string;
  embeddingDim: number;
  similarityScale: number;
  textThreshold: number;
  imageBase: string;
  counts: {
    motifs: number;
    majors: number;
    minors: number;
    deities: number;
    texts: number;
    missingImages: number;
  };
  motifs: MotifRecord[];
  deities: DeityRecord[];
  texts: TextRecord[];
}

export interface Catalog extends CatalogFile {
  motifIndex: Map<string, number>;
  deityIndex: Map<string, number>;
  textIndex: Map<string, number>;
}

export interface SimilarityTables {
  nMotifs: number;
  nDeities: number;
  nTexts: number;
  scale: number;
  motifDeity: Int16Array;
  motifText: Int16Array;
  deityDeity: Int16Array;
}

export interface BalanceConfig {
  world: {
    motifsPerRun: number;
    regionsPerRun: number;
    optimizationSwaps: number;
    optimizationNoise: number;
    minMotifsPerRegion: number;
    startRegionInitiallyConquered: boolean;
  };
  deck: {
    startingSize: number;
    minimumSize: number;
    allowDuplicates: boolean;
  };
  combat: {
    visibleHandSize: number;
    maxCardsPerPlay: number;
    baseHands: number;
    baseDiscards: number;
    baseLives: number;
    reshuffleOnEmpty: boolean;
  };
  difficulty: {
    baseTarget: number;
    hopMultiplier: number;
    expectedRegionSize: number;
    sizeSlope: number;
    sizeMin: number;
    sizeMax: number;
    scoreStep: number;
  };
  texts: {
    minResonantCards: number;
    similarityThreshold: number | null;
    baseBonus: number;
    perExtraCardBonus: number;
    maxActiveBonusesPerHand: number;
    newDiscoveryScoresImmediately: boolean;
    bonusAppliedAfterPokerMultiplier: boolean;
  };
  progression: {
    pointThresholds: number[];
    respecBetweenRuns: boolean;
    upgrades: {
      hands: { cost: number; max: number };
      discards: { cost: number; max: number };
      lives: { cost: number; max: number };
    };
  };
}

export interface UpgradeAllocation {
  hands: number;
  discards: number;
  lives: number;
}

export interface GuideMemory {
  beat: string;
  dismissed: string[];
  known?: string[];
  off?: string[];
}

export interface Profile {
  schemaVersion: 1;
  catalogVersion: string;
  discoveredMotifIds: string[];
  encounteredMotifIds: string[];
  discoveredTextIds: string[];
  upgradeAllocation: UpgradeAllocation;
  statistics: {
    runs: number;
    wins: number;
    losses: number;
  };
  guide?: GuideMemory;
}

export interface RegionState {
  id: string;
  deityId: string;
  motifIds: string[];
  centroid: [number, number];
  polygon: [number, number][];
  neighborRegionIds: string[];
  hopDistance: number;
  targetScore: number;
}

export interface BattleState {
  regionId: string;
  game?: string;
  drawPileIds: string[];
  discardPileIds: string[];
  playedPileIds: string[];
  visibleHandIds: string[];
  selectedIds: string[];
  handsRemaining: number;
  discardsRemaining: number;
  accumulatedScore: number;
  targetScore: number;
  status: 'active' | 'won' | 'lost';
}

export interface FolkloreHit {
  textId: string;
  name: string;
  resonantCount: number;
  bonus: number;
  newlyDiscovered: boolean;
}

export interface LastPlay {
  kind: 'play' | 'discard';
  stamp?: number;
  motifIds: string[];
  categoryLabel?: string;
  scoringCardIds?: string[];
  baseChips?: number;
  cardChips?: number;
  multiplier?: number;
  pokerSubtotal?: number;
  skillChips?: number;
  skillLabel?: string;
  folkloreBonus?: number;
  folklore?: FolkloreHit[];
  total?: number;
  discoveredMotifIds?: string[];
  unlockedTextIds?: string[];
}

export interface RunState {
  schemaVersion: 1;
  catalogVersion: string;
  seed: string;
  rngState: number;
  configSnapshot: BalanceConfig;
  allocationSnapshot: UpgradeAllocation;
  worldMotifIds: string[];
  regions: RegionState[];
  startRegionId: string;
  conqueredRegionIds: string[];
  deckMotifIds: string[];
  livesRemaining: number;
  battle?: BattleState;
  pendingRewardRegionId?: string;
  status: 'active' | 'won' | 'lost';
  handsPlayed: number;
  seenMotifIds?: string[];
  lastPlay?: LastPlay;
}

export interface WorldGenInput {
  seed: string;
  config: BalanceConfig;
  motifs: MotifRecord[];
  deities: DeityRecord[];
  tables: SimilarityTables;
}
