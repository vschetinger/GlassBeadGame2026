import { parseNotes, type Note } from './parse';

const files = import.meta.glob('../../content/events/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export function loadGuide(): { notes: Note[]; warnings: string[] } {
  const raws = Object.entries(files)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([source, raw]) => ({ source, raw }));
  const parsed = parseNotes(raws);
  for (const warning of parsed.warnings) console.warn(warning);
  return parsed;
}

export const guideContent = loadGuide();
