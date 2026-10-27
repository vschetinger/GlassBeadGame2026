import type { HandId, SkillGrant } from '../poker';
import type { Profile } from '../types';
import { playerText, type Note } from './parse';

export interface RunPowers {
  powers?: string[];
  powersOff?: string[];
}

export function grantsFor(notes: Note[], profile: Profile, hand: HandId, run?: RunPowers | null): SkillGrant[] {
  const known = new Set(profile.guide?.known ?? []);
  const off = new Set(profile.guide?.off ?? []);
  const powers = new Set(run?.powers ?? []);
  const powersOff = new Set(run?.powersOff ?? []);
  return notes
    .filter((note) => note.kind === 'skill')
    .filter((note) => !note.when || note.when === 'any' || note.when === hand)
    .filter((note) => (note.god ? powers.has(note.id) && !powersOff.has(note.id) : known.has(note.id) && !off.has(note.id)))
    .map((note) => ({ title: note.title, chips: note.chips ?? 0, mult: note.mult ?? 0 }));
}

export function powerOffers(notes: Note[], deityId: string): { id: string; title: string; text: string }[] {
  return notes
    .filter((note) => note.kind === 'skill' && note.god === deityId)
    .map((note) => ({ id: note.id, title: note.title, text: playerText(note.body) }));
}

export function awardPowers<T extends RunPowers>(run: T, deityId: string | undefined, notes: Note[]): T {
  if (!deityId) return run;
  const gained = powerOffers(notes, deityId).map((offer) => offer.id);
  if (gained.length === 0) return run;
  const powers = [...(run.powers ?? [])];
  for (const id of gained) if (!powers.includes(id)) powers.push(id);
  return powers.length === (run.powers ?? []).length ? run : { ...run, powers };
}

export function togglePower<T extends RunPowers>(run: T, id: string): T {
  if (!(run.powers ?? []).includes(id)) return run;
  const off = run.powersOff ?? [];
  const powersOff = off.includes(id) ? off.filter((item) => item !== id) : [...off, id];
  return { ...run, powersOff };
}
