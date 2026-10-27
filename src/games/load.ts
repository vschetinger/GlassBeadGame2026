import { chipsForRank, DEFAULT_HANDS, type HandRule } from '../poker';
import type { PokerRank } from '../types';
import { parsePokerGame } from './poker';
import { parseRanks } from './ranks';

const files = import.meta.glob('../../content/games/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function loadPoker(): HandRule[] {
  const entry = Object.entries(files).find(([path]) => path.endsWith('/poker.md'));
  if (!entry) return DEFAULT_HANDS;
  const parsed = parsePokerGame(entry[1], 'content/games/poker.md');
  for (const warning of parsed.warnings) console.warn(warning);
  return parsed.hands.length > 0 && parsed.warnings.length === 0 ? parsed.hands : DEFAULT_HANDS;
}

export const pokerHands = loadPoker();

function loadRanks(): Partial<Record<PokerRank, number>> | undefined {
  const entry = Object.entries(files).find(([path]) => path.endsWith('/ranks.md'));
  if (!entry) return undefined;
  const parsed = parseRanks(entry[1], 'content/games/ranks.md');
  for (const warning of parsed.warnings) console.warn(warning);
  return parsed.chips ?? undefined;
}

const rankChips = loadRanks();

export function chipValue(rank: PokerRank): number {
  return chipsForRank(rank, rankChips);
}
