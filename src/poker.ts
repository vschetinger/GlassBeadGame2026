import { POKER_RANKS, type PokerRank, type Suit } from './types';

export type HandId =
  | 'flushFive'
  | 'flushHouse'
  | 'fiveOfAKind'
  | 'straightFlush'
  | 'fourOfAKind'
  | 'fullHouse'
  | 'flush'
  | 'straight'
  | 'threeOfAKind'
  | 'twoPair'
  | 'pair'
  | 'highCard';

export const HAND_TABLE: Record<HandId, { chips: number; mult: number; label: string }> = {
  highCard: { chips: 5, mult: 1, label: 'High Card' },
  pair: { chips: 10, mult: 2, label: 'Pair' },
  twoPair: { chips: 20, mult: 2, label: 'Two Pair' },
  threeOfAKind: { chips: 30, mult: 3, label: 'Three of a Kind' },
  straight: { chips: 30, mult: 4, label: 'Straight' },
  flush: { chips: 35, mult: 4, label: 'Flush' },
  fullHouse: { chips: 40, mult: 4, label: 'Full House' },
  fourOfAKind: { chips: 60, mult: 7, label: 'Four of a Kind' },
  straightFlush: { chips: 100, mult: 8, label: 'Straight Flush' },
  fiveOfAKind: { chips: 120, mult: 12, label: 'Five of a Kind' },
  flushHouse: { chips: 140, mult: 14, label: 'Flush House' },
  flushFive: { chips: 160, mult: 16, label: 'Flush Five' },
};

const BEST_FIRST: HandId[] = [
  'flushFive',
  'flushHouse',
  'fiveOfAKind',
  'straightFlush',
  'fourOfAKind',
  'fullHouse',
  'flush',
  'straight',
  'threeOfAKind',
  'twoPair',
  'pair',
  'highCard',
];

export interface PokerCard {
  id: string;
  rank: PokerRank;
  suit: Suit | null;
  wild: boolean;
  chips: number;
}

export interface PokerScore {
  category: HandId;
  label: string;
  scoringCardIds: string[];
  baseChips: number;
  cardChips: number;
  multiplier: number;
  pokerSubtotal: number;
}

const COURT = new Set<PokerRank>(['Page', 'Knight', 'Queen', 'King']);

export function chipsForRank(rank: PokerRank): number {
  if (rank === 'A') return 11;
  if (COURT.has(rank)) return 10;
  return Number(rank);
}

export function majorNumberToRank(number: number): PokerRank {
  const digit = ((number % 10) + 10) % 10;
  if (digit === 0) return '10';
  if (digit === 1) return 'A';
  return String(digit) as PokerRank;
}

function rankIndex(rank: PokerRank): number {
  return POKER_RANKS.indexOf(rank);
}

function groups(cards: PokerCard[]): Map<PokerRank, PokerCard[]> {
  const map = new Map<PokerRank, PokerCard[]>();
  for (const card of cards) {
    const list = map.get(card.rank) ?? [];
    list.push(card);
    map.set(card.rank, list);
  }
  return map;
}

function isFlush(cards: PokerCard[]): boolean {
  if (cards.length !== 5) return false;
  const suits = new Set(cards.filter((card) => !card.wild).map((card) => card.suit));
  return suits.size <= 1;
}

function isStraight(cards: PokerCard[]): boolean {
  if (cards.length !== 5) return false;
  const indexes = [...new Set(cards.map((card) => rankIndex(card.rank)))].sort((a, b) => a - b);
  if (indexes.length !== 5) return false;
  if (indexes[4] - indexes[0] === 4) return true;
  const wheel = ['A', '2', '3', '4', '5'].map((rank) => rankIndex(rank as PokerRank));
  return wheel.every((index) => indexes.includes(index));
}

function byIds(cards: PokerCard[]): string[] {
  return cards.map((card) => card.id);
}

function ofRank(grouped: Map<PokerRank, PokerCard[]>, count: number): PokerCard[] {
  for (const list of grouped.values()) {
    if (list.length === count) return list;
  }
  return [];
}

function matches(id: HandId, cards: PokerCard[]): string[] | null {
  const grouped = groups(cards);
  const counts = [...grouped.values()].map((list) => list.length).sort((a, b) => b - a);
  const flush = isFlush(cards);
  const straight = isStraight(cards);
  if (id === 'flushFive') return counts[0] === 5 && flush ? byIds(cards) : null;
  if (id === 'flushHouse') return counts[0] === 3 && counts[1] === 2 && flush ? byIds(cards) : null;
  if (id === 'fiveOfAKind') return counts[0] === 5 ? byIds(cards) : null;
  if (id === 'straightFlush') return straight && flush ? byIds(cards) : null;
  if (id === 'fourOfAKind') {
    const four = ofRank(grouped, 4);
    return four.length === 4 ? byIds(four) : null;
  }
  if (id === 'fullHouse') return counts[0] === 3 && counts[1] === 2 ? byIds(cards) : null;
  if (id === 'flush') return flush ? byIds(cards) : null;
  if (id === 'straight') return straight ? byIds(cards) : null;
  if (id === 'threeOfAKind') {
    const three = ofRank(grouped, 3);
    return three.length === 3 ? byIds(three) : null;
  }
  if (id === 'twoPair') {
    const pairs = [...grouped.values()].filter((list) => list.length === 2);
    return pairs.length === 2 ? byIds(pairs.flat()) : null;
  }
  if (id === 'pair') {
    const pair = ofRank(grouped, 2);
    return pair.length === 2 ? byIds(pair) : null;
  }
  const best = cards.reduce((top, card) => (rankIndex(card.rank) > rankIndex(top.rank) ? card : top));
  return [best.id];
}

export function evaluatePoker(cards: PokerCard[]): PokerScore {
  if (cards.length < 1 || cards.length > 5) {
    throw new Error('A play must contain 1 to 5 cards.');
  }
  for (const id of BEST_FIRST) {
    const scoringCardIds = matches(id, cards);
    if (!scoringCardIds) continue;
    const table = HAND_TABLE[id];
    const cardChips = cards
      .filter((card) => scoringCardIds.includes(card.id))
      .reduce((sum, card) => sum + card.chips, 0);
    return {
      category: id,
      label: table.label,
      scoringCardIds,
      baseChips: table.chips,
      cardChips,
      multiplier: table.mult,
      pokerSubtotal: (table.chips + cardChips) * table.mult,
    };
  }
  throw new Error('Every selection contains a high card.');
}
