import type { Profile, RunState } from '../types';

export const KNOWN_COUNTERS = [
  'seen_total',
  'seen_run',
  'discovered_total',
  'texts_total',
  'runs',
  'hands_run',
  'in_battle',
  'conquered',
] as const;

export const KNOWN_HOOKS = [
  'start-run',
  'new-run',
  'short-run',
  'continue',
  'deck',
  'library',
  'map',
  'attack',
  'play',
  'play-all',
  'discard',
] as const;

const counterNames = new Set<string>(KNOWN_COUNTERS);

export function isKnownCounter(name: string): boolean {
  return counterNames.has(name);
}

export function countersFrom(profile: Profile, run: RunState | null): Record<string, number> {
  const seen = new Set([...profile.encounteredMotifIds, ...profile.discoveredMotifIds]);
  const runSeen = new Set(run?.seenMotifIds ?? []);
  const battle = run?.battle;
  if (battle) {
    for (const id of [...battle.visibleHandIds, ...battle.playedPileIds, ...battle.discardPileIds]) runSeen.add(id);
  }
  return {
    seen_total: seen.size,
    seen_run: runSeen.size,
    discovered_total: profile.discoveredMotifIds.length,
    texts_total: profile.discoveredTextIds.length,
    runs: profile.statistics?.runs ?? 0,
    hands_run: run?.handsPlayed ?? 0,
    in_battle: battle?.status === 'active' ? 1 : 0,
    conquered: run?.conqueredRegionIds.length ?? 0,
  };
}
