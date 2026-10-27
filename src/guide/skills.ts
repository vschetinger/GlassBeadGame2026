import type { HandId, SkillGrant } from '../poker';
import type { Profile } from '../types';
import type { Note } from './parse';

export function grantsFor(notes: Note[], profile: Profile, hand: HandId): SkillGrant[] {
  const known = new Set(profile.guide?.known ?? []);
  const off = new Set(profile.guide?.off ?? []);
  return notes
    .filter((note) => note.kind === 'skill' && known.has(note.id) && !off.has(note.id))
    .filter((note) => !note.when || note.when === 'any' || note.when === hand)
    .map((note) => ({ title: note.title, chips: note.chips ?? 0, mult: note.mult ?? 0 }));
}
