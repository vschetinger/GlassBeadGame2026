import { describe, expect, it } from 'vitest';
import { parseNote, parseNotes } from './parse';
import { present } from './walk';

const eventFiles = import.meta.glob('../../content/events/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function tutorial() {
  const raws = Object.entries(eventFiles)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([source, raw]) => ({ source, raw }));
  return parseNotes(raws);
}

const zeros = {
  seen_total: 0,
  seen_run: 0,
  discovered_total: 0,
  texts_total: 0,
  runs: 0,
  hands_run: 0,
  in_battle: 0,
  conquered: 0,
};

describe('event notes', () => {
  it('reads a button label as words and a gate as a comparison', () => {
    const parsed = parseNote(`---
id: sample
title: Sample
show: dialog
---

A sentence with a [[prose-link|story]] in it.

> [[left|seen_run >= 5]]
> [[right|seen_total > 50]]
+ [[aside|discovered_total >= 1]]
? [[playing|Keep going]]
`);
    expect(parsed.warnings).toEqual([]);
    expect(parsed.note?.edges.map((edge) => [edge.glyph, edge.to, edge.label])).toEqual([
      ['>', 'left', 'seen_run >= 5'],
      ['>', 'right', 'seen_total > 50'],
      ['+', 'aside', 'discovered_total >= 1'],
      ['?', 'playing', 'Keep going'],
    ]);
    expect(parsed.note?.body).toContain('[[prose-link|story]]');
  });

  it('warns on an unknown counter and does not treat a button as a test', () => {
    const parsed = parseNote(`---
id: sample
show: coach
---

? [[next|seen_run >= 5]]
> [[next|mood >= 1]]
`);
    expect(parsed.warnings.some((warning) => warning.includes('missing at'))).toBe(true);
    expect(parsed.warnings.some((warning) => warning.includes('mood'))).toBe(true);
    expect(parsed.note?.edges[0].label).toBe('seen_run >= 5');
  });

  it('walks the tutorial without skipping the first lesson', () => {
    const { notes, warnings } = tutorial();
    expect(warnings).toEqual([]);
    const fresh = present(notes, 'start', zeros, []);
    expect(fresh.beat).toBe('empty');
    expect(fresh.stage?.show).toBe('dialog');
    expect(fresh.choices.map((choice) => choice.label)).toEqual(['Show me the table']);

    const asked = present(notes, 'enter-table', zeros, []);
    expect(asked.beat).toBe('enter-table');
    expect(asked.stage?.at).toBe('start-run');

    const started = present(notes, 'enter-table', { ...zeros, runs: 1, conquered: 1 }, []);
    expect(started.beat).toBe('on-map');

    const fighting = present(notes, 'on-map', { ...zeros, runs: 1, conquered: 1, in_battle: 1, seen_run: 8 }, []);
    expect(fighting.beat).toBe('dealt');
    expect(fighting.stage?.at).toBe('play');

    const played = present(notes, 'dealt', { ...zeros, runs: 1, in_battle: 1, seen_run: 8, hands_run: 1, discovered_total: 1 }, []);
    expect(played.beat).toBe('revealed');
    expect(played.choices.map((choice) => choice.to)).toEqual(['library-tip', 'playing']);
  });

  it('sends an existing library to the quiet sink and offers a lesson once', () => {
    const { notes } = tutorial();
    const back = present(notes, 'start', { ...zeros, seen_total: 16, discovered_total: 16 }, []);
    expect(back.beat).toBe('returning');

    const quiet = present(notes, 'playing', { ...zeros, seen_total: 16, discovered_total: 1, seen_run: 8 }, []);
    expect(quiet.stage).toBeNull();
    expect(quiet.banners.map((banner) => banner.id)).toEqual(['lesson.question-mark']);

    const opened = present(notes, 'lesson.question-mark', { ...zeros, discovered_total: 1 }, []);
    expect(opened.beat).toBe('lesson.question-mark');
    expect(opened.stage?.show).toBe('dialog');

    const dismissed = present(notes, 'playing', { ...zeros, seen_total: 60, discovered_total: 1, seen_run: 12, conquered: 2 }, ['lesson.question-mark']);
    expect(dismissed.banners.map((banner) => banner.id)).toEqual(['lesson.this-run', 'lesson.frontier']);
  });

  it('follows the first true gate and ignores a side offer', () => {
    const { notes } = parseNotes([
      { source: 'a', raw: '---\nid: a\n---\n\n> [[b|seen_total == 0]]\n> [[c|seen_total > 0]]\n+ [[d|seen_total > 0]]\n' },
      { source: 'b', raw: '---\nid: b\nshow: dialog\n---\n\nFirst.\n' },
      { source: 'c', raw: '---\nid: c\nshow: dialog\n---\n\nSecond.\n' },
      { source: 'd', raw: '---\nid: d\ntitle: Aside\nshow: dialog\n---\n\nAside.\n' },
    ]);
    expect(present(notes, 'a', { seen_total: 0 }, []).beat).toBe('b');
    const later = present(notes, 'a', { seen_total: 3 }, []);
    expect(later.beat).toBe('c');
    expect(later.banners).toEqual([]);
    const parked = present(notes, 'a', { seen_total: 0, discovered_total: 1 }, []);
    expect(parked.beat).toBe('b');
  });

  it('does not fire an unknown counter', () => {
    const { notes } = parseNotes([
      { source: 'a', raw: '---\nid: a\nshow: dialog\n---\n\n> [[b|mood > 0]]\n' },
      { source: 'b', raw: '---\nid: b\nshow: dialog\n---\n\nGone.\n' },
    ]);
    expect(present(notes, 'a', { mood: 9 }, []).beat).toBe('a');
  });
});
