import { BEST_FIRST } from '../poker';
import { isKnownCounter, KNOWN_HOOKS } from './counters';

export type Glyph = '>' | '+' | '?';
export type StageShow = 'dialog' | 'coach' | 'banner' | 'page';
export type NoteKind = 'note' | 'skill';

export interface Edge {
  glyph: Glyph;
  to: string;
  label: string;
}

export interface Mention {
  to: string;
  label: string;
}

export interface Note {
  id: string;
  title: string;
  show?: StageShow;
  at?: string;
  kind: NoteKind;
  bind?: string;
  when?: string;
  chips?: number;
  mult?: number;
  god?: string;
  body: string;
  edges: Edge[];
  mentions: Mention[];
}

const EDGE = /^([>+?])\s+\[\[([^\]|]+)(?:\|([^\]]*))?\]\]\s*$/;
const MENTION = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const CONDITION = /^([a-z][a-z0-9_]*)\s*(==|!=|>=|<=|>|<)\s*(\d+)$/;
const SHOWS = new Set<StageShow>(['dialog', 'coach', 'banner', 'page']);
const KINDS = new Set<NoteKind>(['note', 'skill']);
const BINDS = new Set(['seal']);
const HANDS = new Set<string>(BEST_FIRST);
const HOOKS = new Set<string>(KNOWN_HOOKS);

export function mentionsIn(body: string): Mention[] {
  return [...body.matchAll(new RegExp(MENTION.source, 'g'))].map((match) => ({
    to: match[1].trim(),
    label: (match[2] ?? match[1]).trim(),
  }));
}

export function splitMentions(text: string): Array<{ kind: 'text'; text: string } | Mention & { kind: 'mention' }> {
  const parts: Array<{ kind: 'text'; text: string } | Mention & { kind: 'mention' }> = [];
  const pattern = new RegExp(MENTION.source, 'g');
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push({ kind: 'text', text: text.slice(last, index) });
    parts.push({ kind: 'mention', to: match[1].trim(), label: (match[2] ?? match[1]).trim() });
    last = index + match[0].length;
  }
  if (last < text.length) parts.push({ kind: 'text', text: text.slice(last) });
  return parts;
}

export function learnedIds(note: Note | undefined, already: string[]): string[] {
  if (!note) return already;
  const next = new Set(already);
  next.add(note.id);
  for (const mention of note.mentions) next.add(mention.to);
  return [...next];
}

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
  const kind = (meta.kind?.trim() || 'note') as NoteKind;
  if (!KINDS.has(kind)) warnings.push(`${id}: unknown kind "${meta.kind}"`);
  const bind = meta.bind?.trim() || undefined;
  if (bind && !BINDS.has(bind)) warnings.push(`${id}: unknown bind "${bind}"`);
  const when = meta.when?.trim() || undefined;
  if (when && when !== 'any' && !HANDS.has(when)) warnings.push(`${id}: unknown hand "${when}"`);
  const chips = readCount(meta.chips, id, 'chips', warnings);
  const mult = readCount(meta.mult, id, 'mult', warnings);
  const god = meta.god?.trim() || undefined;
  if (god && kind !== 'skill') warnings.push(`${id}: god is only meaningful on a skill`);
  if (kind === 'skill' && chips == null && mult == null) warnings.push(`${id}: a skill needs chips or mult`);
  const cleaned = prose.join('\n').trim();
  return {
    note: {
      id,
      title: meta.title?.trim() || id,
      show: show && SHOWS.has(show) ? show : undefined,
      at,
      kind: KINDS.has(kind) ? kind : 'note',
      bind,
      when,
      chips,
      mult,
      god,
      body: cleaned,
      edges,
      mentions: mentionsIn(cleaned),
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
    for (const mention of note.mentions) {
      if (!ids.has(mention.to)) warnings.push(`${note.id}: [[${mention.to}]] does not exist`);
    }
  }
  return { notes, warnings };
}

function readCount(raw: string | undefined, id: string, key: string, warnings: string[]): number | undefined {
  if (!raw) return undefined;
  if (!/^\d+$/.test(raw)) {
    warnings.push(`${id}: ${key} must be a whole number`);
    return undefined;
  }
  return Number(raw);
}

function readMeta(block: string): Record<string, string> {
  const meta: Record<string, string> = {};
  for (const line of block.split('\n')) {
    const match = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (match) meta[match[1]] = match[2].trim();
  }
  return meta;
}
