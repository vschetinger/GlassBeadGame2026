import { isKnownCounter } from './counters';
import { conditionParts, type Edge, type Note } from './parse';

export interface Choice {
  to: string;
  label: string;
}

export interface Banner {
  id: string;
  title: string;
}

export interface GuideView {
  beat: string;
  stage: Note | null;
  choices: Choice[];
  banners: Banner[];
}

const MAX_HOPS = 12;
const MAX_BANNERS = 2;

export function conditionHolds(label: string, counters: Record<string, number>): boolean {
  const parts = conditionParts(label);
  if (!parts || !isKnownCounter(parts.name)) return false;
  const value = counters[parts.name];
  if (value == null || Number.isNaN(value)) return false;
  switch (parts.op) {
    case '==': return value === parts.value;
    case '!=': return value !== parts.value;
    case '>=': return value >= parts.value;
    case '<=': return value <= parts.value;
    case '>': return value > parts.value;
    case '<': return value < parts.value;
    default: return false;
  }
}

function gateOpen(edge: Edge, counters: Record<string, number>): boolean {
  if (!edge.label.trim()) return edge.glyph === '>';
  return conditionHolds(edge.label, counters);
}

export function present(
  notes: Note[],
  beat: string,
  counters: Record<string, number>,
  dismissed: string[],
): GuideView {
  const byId = new Map(notes.map((note) => [note.id, note]));
  let id = byId.has(beat) ? beat : 'start';
  if (!byId.has(id)) id = notes[0]?.id ?? beat;
  const visited = new Set<string>();
  for (let hop = 0; hop < MAX_HOPS; hop += 1) {
    if (visited.has(id)) break;
    visited.add(id);
    const node = byId.get(id);
    if (!node) break;
    const next = node.edges.find((edge) => edge.glyph === '>' && gateOpen(edge, counters) && byId.has(edge.to));
    if (!next) break;
    id = next.to;
  }
  const node = byId.get(id) ?? null;
  const stage = node && (node.show === 'dialog' || node.show === 'coach' || node.show === 'page') ? node : null;
  const choices = (stage?.edges ?? [])
    .filter((edge) => edge.glyph === '?')
    .map((edge) => ({ to: edge.to, label: edge.label || edge.to }));
  const banners = (node?.edges ?? [])
    .filter((edge) => edge.glyph === '+' && edge.label.trim() !== '' && conditionHolds(edge.label, counters) && !dismissed.includes(edge.to) && byId.has(edge.to))
    .slice(0, MAX_BANNERS)
    .map((edge) => ({ id: edge.to, title: byId.get(edge.to)?.title || edge.to }));
  return { beat: id, stage, choices, banners };
}
