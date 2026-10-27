import type { BalanceConfig } from '../types';

const LINE = /^([A-Za-z][A-Za-z0-9.]*)\s*:\s*(.*)$/;

export function applyBalance(
  base: BalanceConfig,
  raw: string,
  source = 'balance',
): { config: BalanceConfig; warnings: string[] } {
  const warnings: string[] = [];
  const config = structuredClone(base);
  const text = raw.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  let body = text;
  if (text.startsWith('---\n')) {
    const end = text.indexOf('\n---\n', 4);
    if (end < 0) warnings.push(`${source}: frontmatter is not closed`);
    else body = text.slice(end + 5);
  }
  for (const line of body.split('\n')) {
    if (!line.trim()) continue;
    const match = line.match(LINE);
    if (!match) {
      warnings.push(`${source}: unreadable line "${line.trim()}"`);
      continue;
    }
    setKey(config, match[1], match[2].trim(), source, warnings);
  }
  return { config, warnings };
}

function setKey(config: BalanceConfig, path: string, raw: string, source: string, warnings: string[]) {
  const parts = path.split('.');
  let cursor: Record<string, unknown> = config as unknown as Record<string, unknown>;
  for (let index = 0; index < parts.length - 1; index += 1) {
    const next = cursor[parts[index]];
    if (next == null || typeof next !== 'object' || Array.isArray(next)) {
      warnings.push(`${source}: unknown key "${path}"`);
      return;
    }
    cursor = next as Record<string, unknown>;
  }
  const leaf = parts[parts.length - 1];
  if (!Object.prototype.hasOwnProperty.call(cursor, leaf)) {
    warnings.push(`${source}: unknown key "${path}"`);
    return;
  }
  const parsed = parseValue(cursor[leaf], raw);
  if (!parsed.ok) {
    warnings.push(`${source}: ${path} cannot be "${raw}"`);
    return;
  }
  cursor[leaf] = parsed.value;
}

function parseValue(current: unknown, raw: string): { ok: true; value: unknown } | { ok: false } {
  if (Array.isArray(current)) {
    const parts = raw.split(',').map((part) => part.trim()).filter(Boolean);
    if (parts.length === 0 || parts.some((part) => !/^\d+$/.test(part))) return { ok: false };
    return { ok: true, value: parts.map(Number) };
  }
  if (typeof current === 'boolean') {
    if (raw !== 'true' && raw !== 'false') return { ok: false };
    return { ok: true, value: raw === 'true' };
  }
  if (typeof current === 'string') {
    const value = raw.trim();
    if (!/^[a-z][a-z-]*$/.test(value)) return { ok: false };
    return { ok: true, value };
  }
  if (typeof current === 'number' || current === null) {
    if (raw === 'catalog') return { ok: true, value: null };
    if (!/^\d+(\.\d+)?$/.test(raw)) return { ok: false };
    return { ok: true, value: Number(raw) };
  }
  return { ok: false };
}
