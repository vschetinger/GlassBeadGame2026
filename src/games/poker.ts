import { BEST_FIRST, type HandId, type HandRule } from '../poker';

const LINE = /^([A-Za-z][A-Za-z0-9]*)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(.+?)\s*$/;
const HANDS = new Set<string>(BEST_FIRST);

export function parsePokerGame(raw: string, source = 'poker'): { hands: HandRule[]; warnings: string[] } {
  const warnings: string[] = [];
  const text = raw.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  let body = text;
  if (text.startsWith('---\n')) {
    const end = text.indexOf('\n---\n', 4);
    body = end >= 0 ? text.slice(end + 5) : text;
    if (end < 0) warnings.push(`${source}: frontmatter is not closed`);
  }
  const hands: HandRule[] = [];
  const seen = new Set<string>();
  for (const line of body.split('\n')) {
    if (!line.trim()) continue;
    const match = line.match(LINE);
    if (!match) {
      warnings.push(`${source}: unreadable hand line "${line.trim()}"`);
      continue;
    }
    const id = match[1];
    if (!HANDS.has(id)) {
      warnings.push(`${source}: unknown hand "${id}"`);
      continue;
    }
    if (seen.has(id)) warnings.push(`${source}: duplicate hand "${id}"`);
    seen.add(id);
    hands.push({ id: id as HandId, chips: Number(match[2]), mult: Number(match[3]), label: match[4].trim() });
  }
  if (!hands.some((hand) => hand.id === 'highCard')) warnings.push(`${source}: highCard is required`);
  return { hands, warnings };
}
