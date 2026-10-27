import { DEFAULT_CONFIG, validateConfig } from '../config';
import type { BalanceConfig } from '../types';
import { applyBalance } from './parse';

const files = import.meta.glob('../../content/balance/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function read(name: string): string | null {
  const entry = Object.entries(files).find(([path]) => path.endsWith(`/${name}`));
  return entry ? entry[1] : null;
}

function accept(base: BalanceConfig, raw: string, source: string): BalanceConfig {
  const applied = applyBalance(base, raw, source);
  const errors = validateConfig(applied.config);
  for (const warning of [...applied.warnings, ...errors]) console.warn(warning);
  return applied.warnings.length === 0 && errors.length === 0 ? applied.config : base;
}

const defaultRaw = read('default.md');
export const authoredDefault: BalanceConfig = defaultRaw
  ? accept(DEFAULT_CONFIG, defaultRaw, 'content/balance/default.md')
  : DEFAULT_CONFIG;

const shortRaw = read('short.md');
export const authoredShort: BalanceConfig = shortRaw
  ? accept(authoredDefault, shortRaw, 'content/balance/short.md')
  : authoredDefault;
