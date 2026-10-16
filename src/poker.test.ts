import { describe, expect, it } from 'vitest';
import { chipsForRank, evaluatePoker, majorNumberToRank, type PokerCard } from './poker';
import type { PokerRank, Suit } from './types';

function card(id: string, rank: PokerRank, suit: Suit | null, wild = false): PokerCard {
  return { id, rank, suit, wild, chips: chipsForRank(rank) };
}

describe('major rank mapping', () => {
  it('folds major numbers onto Ace through 10', () => {
    expect(majorNumberToRank(0)).toBe('10');
    expect(majorNumberToRank(1)).toBe('A');
    expect(majorNumberToRank(11)).toBe('A');
    expect(majorNumberToRank(21)).toBe('A');
    expect(majorNumberToRank(2)).toBe('2');
    expect(majorNumberToRank(12)).toBe('2');
    expect(majorNumberToRank(3)).toBe('3');
    expect(majorNumberToRank(13)).toBe('3');
    expect(majorNumberToRank(10)).toBe('10');
    expect(majorNumberToRank(20)).toBe('10');
  });
});

describe('Balatro-style poker', () => {
  it('adds scoring-card chips before the multiplier', () => {
    const score = evaluatePoker([card('a', 'A', 'Cups'), card('b', 'A', 'Swords')]);
    expect(score.category).toBe('pair');
    expect(score.pokerSubtotal).toBe((10 + 11 + 11) * 2);
    expect(score.scoringCardIds).toEqual(['a', 'b']);
  });

  it('scores only the highest card of a high-card play', () => {
    const score = evaluatePoker([
      card('k', 'King', 'Cups'),
      card('2', '2', 'Wands'),
      card('4', '4', 'Swords'),
    ]);
    expect(score.category).toBe('highCard');
    expect(score.scoringCardIds).toEqual(['k']);
    expect(score.pokerSubtotal).toBe((5 + 10) * 1);
  });

  it('accepts the wheel and the court ace-high straight', () => {
    const wheel = evaluatePoker([
      card('a', 'A', 'Cups'),
      card('2', '2', 'Swords'),
      card('3', '3', 'Wands'),
      card('4', '4', 'Pentacles'),
      card('5', '5', 'Cups'),
    ]);
    expect(wheel.category).toBe('straight');
    const broadway = evaluatePoker([
      card('p', 'Page', 'Cups'),
      card('n', 'Knight', 'Swords'),
      card('q', 'Queen', 'Wands'),
      card('k', 'King', 'Pentacles'),
      card('a', 'A', 'Cups'),
    ]);
    expect(broadway.category).toBe('straight');
  });

  it('rejects a straight that wraps around the ace', () => {
    const score = evaluatePoker([
      card('k', 'King', 'Cups'),
      card('a', 'A', 'Swords'),
      card('2', '2', 'Wands'),
      card('3', '3', 'Pentacles'),
      card('4', '4', 'Cups'),
    ]);
    expect(score.category).toBe('highCard');
  });

  it('lets a wild major complete one suit and not two different ones', () => {
    const flush = evaluatePoker([
      card('1', '2', 'Cups'),
      card('2', '5', 'Cups'),
      card('3', '7', 'Cups'),
      card('4', '9', 'Cups'),
      card('w', 'King', null, true),
    ]);
    expect(flush.category).toBe('flush');
    const broken = evaluatePoker([
      card('1', '2', 'Cups'),
      card('2', '5', 'Cups'),
      card('3', '7', 'Cups'),
      card('4', '9', 'Swords'),
      card('w', 'King', null, true),
    ]);
    expect(broken.category).toBe('highCard');
  });

  it('makes five agreeing wilds a straight flush or a flush five', () => {
    const straight = evaluatePoker([
      card('a', '6', null, true),
      card('b', '7', null, true),
      card('c', '8', null, true),
      card('d', '9', null, true),
      card('e', '10', null, true),
    ]);
    expect(straight.category).toBe('straightFlush');
    const five = evaluatePoker([
      card('a', 'A', null, true),
      card('b', 'A', null, true),
      card('c', 'A', null, true),
      card('d', 'A', null, true),
      card('e', 'A', null, true),
    ]);
    expect(five.category).toBe('flushFive');
    expect(five.pokerSubtotal).toBe((160 + 11 * 5) * 16);
  });

  it('prefers four of a kind over a flush when both descriptions fit', () => {
    const score = evaluatePoker([
      card('a', '9', 'Wands'),
      card('b', '9', 'Wands'),
      card('c', '9', 'Wands'),
      card('d', '9', 'Wands'),
      card('e', '2', 'Wands'),
    ]);
    expect(score.category).toBe('fourOfAKind');
    expect(score.scoringCardIds).toHaveLength(4);
    expect(score.scoringCardIds).not.toContain('e');
  });

  it('classifies a suited pair-plus-three as a flush', () => {
    const score = evaluatePoker([
      card('a', '6', 'Pentacles'),
      card('b', '6', 'Pentacles'),
      card('c', '2', 'Pentacles'),
      card('d', '8', 'Pentacles'),
      card('e', 'King', 'Pentacles'),
    ]);
    expect(score.category).toBe('flush');
    expect(score.scoringCardIds).toHaveLength(5);
  });

  it('scores a full house from all five cards', () => {
    const score = evaluatePoker([
      card('a', 'Queen', 'Cups'),
      card('b', 'Queen', 'Swords'),
      card('c', 'Queen', 'Wands'),
      card('d', '4', 'Cups'),
      card('e', '4', 'Pentacles'),
    ]);
    expect(score.category).toBe('fullHouse');
    expect(score.pokerSubtotal).toBe((40 + 10 + 10 + 10 + 4 + 4) * 4);
  });
});
