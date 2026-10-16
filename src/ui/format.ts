import type { MotifRecord, Suit } from '../types';

const SUIT_MARK: Record<Suit, string> = {
  Cups: '♥',
  Pentacles: '♦',
  Swords: '♠',
  Wands: '♣',
};

export function faceLabel(motif: MotifRecord): string {
  if (motif.wild) return `${motif.rank} · wild`;
  return `${motif.rank}${SUIT_MARK[motif.suit ?? 'Cups']}`;
}

export function shortRank(rank: string): string {
  if (rank === 'Page') return 'P';
  if (rank === 'Knight') return 'Kn';
  if (rank === 'Queen') return 'Q';
  if (rank === 'King') return 'K';
  return rank;
}

export function suitMark(suit: Suit): string {
  return SUIT_MARK[suit];
}

export function imageUrl(base: string, image: string): string {
  return `${base}${image}`;
}
