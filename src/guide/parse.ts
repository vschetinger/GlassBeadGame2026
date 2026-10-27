import { isKnownCounter, KNOWN_HOOKS } from './counters';

export type Glyph = '>' | '+' | '?';
export type StageShow = 'dialog' | 'coach' | 'banner' | 'page';

export interface Edge {
  glyph: Glyph;
  to: string;
  label: string;
}

export interface Note {
  id: string;
  title: string;
  show?: StageShow;
  at?: string;
  body: string;
  edges: Edge[];
}

const EDGE = /^([>+?])\s+\[\[([^\]|]+)(?:\|([^\]]*))?\]\]\s*$/;
const CONDITION = /^([a-z][a-z0-9_]*)\s*(==|!=|>=|<=|>|<)\s*(\d+)$/;
const SHOWS = new Set<StageShow>(['dialog', 'coach', 'banner', 'page']);
const HOOKS = new Set<string>(KNOWN_HOOKS);

export function conditionParts(label: string): { name: string; op: string; value: number } | null {
  const match = label.trim().match(CONDITION);
  if (!match) return null;
  return { name: match[1], op: match[2], value: Number(match[3]) };
}

export function playerText(body: string): string {
  return body.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_match, id: string, label?: string) => label?.trim() || id.trim());
}

export function parseNote(raw: string, source = 'note'): { note: Note | null; warnings: string[] } {
  const warnings: string[] = [];
  const text = raw.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  let meta: Record<string, string> = {};
  let body = text;
  if (text.startsWith('---\n')) {
    const end = text.indexOf('\n---\n', 4);
    if (end >= 0) {
      meta = readMeta(text.slice(4, end));
      body = text.slice(end + 5);
    } else {
      warnings.push(`${source}: frontmatter is not closed`);
    }
  }
  const edges: Edge[] = [];
  const prose: string[] = [];
  for (const line of body.split('\n')) {
    const edge = line.match(EDGE);
    if (!edge) {
      prose.push(line);
      continue;
    }
    const glyph = edge[1] as Glyph;
    const to = edge[2].trim();
    const label = (edge[3] ?? '').trim();
    if (!to) {
      warnings.push(`${source}: edge has an empty target`);
      continue;
    }
    if (glyph !== '?' && label && !conditionParts(label)) {
      warnings.push(`${source}: ${glyph} [[${to}]] has an unreadable test "${label}"`);
    }
    if (glyph !== '?' && label) {
      const parts = conditionParts(label);
      if (parts && !isKnownCounter(parts.name)) {
        warnings.push(`${source}: unknown counter "${parts.name}"`);
      }
    }
    edges.push({ glyph, to, label });
  }
  const id = meta.id?.trim() ?? '';
  if (!id) {
    warnings.push(`${source}: missing id`);
    return { note: null, warnings };
  }
  const show = meta.show?.trim() as StageShow | undefined;
  if (show && !SHOWS.has(show)) warnings.push(`${id}: unknown show "${meta.show}"`);
  const at = meta.at?.trim() || undefined;
  if (show === 'coach' && !at) warnings.push(`${id}: coach is missing at`);
  if (at && !HOOKS.has(at)) warnings.push(`${id}: unknown hook "${at}"`);
  const cleaned = prose.join('\n').trim();
  return {
    note: {
      id,
      title: meta.title?.trim() || id,
      show: show && SHOWS.has(show) ? show : undefined,
      at,
      body: cleaned,
      edges,
    },
    warnings,
  };
}

export function parseNotes(raws: { source: string; raw: string }[]): { notes: Note[]; warnings: string[] } {
  const warnings: string[] = [];
  const notes: Note[] = [];
  const seen = new Set<string>();
  for (const item of raws) {
    const parsed = parseNote(item.raw, item.source);
    warnings.push(...parsed.warnings);
    if (!parsed.note) continue;
    if (seen.has(parsed.note.id)) warnings.push(`${parsed.note.id}: duplicate id`);
    seen.add(parsed.note.id);
    notes.push(parsed.note);
  }
  const ids = new Set(notes.map((note) => note.id));
  for (const note of notes) {
    for (const edge of note.edges) {
      if (!ids.has(edge.to)) warnings.push(`${note.id}: [[${edge.to}]] does not exist`);
    }
  }
  return { notes, warnings };
}

function readMeta(block: string): Record<string, string> {
  const meta: Record<string, string> = {};
  for (const line of block.split('\n')) {
    const match = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (match) meta[match[1]] = match[2].trim();
  }
  return meta;
}
