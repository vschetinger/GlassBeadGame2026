import { POKER_RANKS, type PokerRank } from '../types';

const LINE = /^([A-Za-z0-9]+)\s*\|\s*(\d+)\s*$/;
const RANKS = new Set<string>(POKER_RANKS);

export function parseRanks(raw: string, source = 'ranks'): { chips: Record<PokerRank, number> | null; warnings: string[] } {
  const warnings: string[] = [];
  const text = raw.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  let body = text;
  if (text.startsWith('---\n')) {
    const end = text.indexOf('\n---\n', 4);
    if (end < 0) warnings.push(`${source}: frontmatter is not closed`);
    else body = text.slice(end + 5);
  }
  const chips = {} as Record<PokerRank, number>;
  for (const line of body.split('\n')) {
    if (!line.trim()) continue;
    const match = line.match(LINE);
    if (!match) {
      warnings.push(`${source}: unreadable rank line "${line.trim()}"`);
      continue;
    }
    if (!RANKS.has(match[1])) {
      warnings.push(`${source}: unknown rank "${match[1]}"`);
      continue;
    }
    chips[match[1] as PokerRank] = Number(match[2]);
  }
  const missing = POKER_RANKS.filter((rank) => chips[rank] == null);
  if (missing.length > 0) warnings.push(`${source}: missing ${missing.join(', ')}`);
  return { chips: missing.length === 0 && warnings.length === 0 ? chips : null, warnings };
}
