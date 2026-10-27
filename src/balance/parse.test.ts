import { describe, expect, it } from 'vitest';
import { DEFAULT_CONFIG, validateConfig } from '../config';
import { POKER_RANKS } from '../types';
import { parseRanks } from '../games/ranks';
import { applyBalance } from './parse';

const balanceFiles = import.meta.glob('../../content/balance/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const rankFiles = import.meta.glob('../../content/games/ranks.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function file(map: Record<string, string>, suffix: string): string {
  const entry = Object.entries(map).find(([path]) => path.endsWith(suffix));
  if (!entry) throw new Error(`missing ${suffix}`);
  return entry[1];
}

describe('authored balance', () => {
  it('reads the full run and lets the short run replace only its own lines', () => {
    const full = applyBalance(DEFAULT_CONFIG, file(balanceFiles, '/default.md'), 'default');
    expect(full.warnings).toEqual([]);
    expect(validateConfig(full.config)).toEqual([]);
    expect(full.config.deck.startingSize).toBe(2);
    expect(full.config.deck.reward).toBe('add');
    expect(full.config.combat.visibleHandSize).toBe(5);
    expect(full.config.difficulty.targetModel).toBe('potential');
    expect(full.config.difficulty.waveLow).toBe(0.45);
    expect(full.config.difficulty.hopMultiplier).toBe(1.5);
    expect(full.config.texts.similarityThreshold).toBeNull();
    expect(full.config.progression.pointThresholds).toEqual([10, 25, 50, 75, 100, 150, 200]);
    const short = applyBalance(full.config, file(balanceFiles, '/short.md'), 'short');
    expect(short.warnings).toEqual([]);
    expect(short.config.world.motifsPerRun).toBe(18);
    expect(short.config.world.regionsPerRun).toBe(5);
    expect(short.config.difficulty.targetModel).toBe('potential');
    expect(short.config.deck.startingSize).toBe(full.config.deck.startingSize);
  });

  it('skips an unknown key and keeps the previous value', () => {
    const applied = applyBalance(DEFAULT_CONFIG, 'difficulty.baseTarget: 80\nmood.level: 3\n', 'sample');
    expect(applied.config.difficulty.baseTarget).toBe(80);
    expect(applied.warnings.some((warning) => warning.includes('mood.level'))).toBe(true);
  });

  it('reads a chip for every rank', () => {
    const parsed = parseRanks(file(rankFiles, '/ranks.md'));
    expect(parsed.warnings).toEqual([]);
    expect(parsed.chips && Object.keys(parsed.chips).sort()).toEqual([...POKER_RANKS].sort());
    expect(parsed.chips?.A).toBe(11);
    expect(parsed.chips?.King).toBe(10);
  });
});
