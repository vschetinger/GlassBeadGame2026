import type { BalanceConfig, Profile, UpgradeAllocation } from './types';

export function emptyProfile(catalogVersion: string): Profile {
  return {
    schemaVersion: 1,
    catalogVersion,
    discoveredMotifIds: [],
    encounteredMotifIds: [],
    discoveredTextIds: [],
    upgradeAllocation: { hands: 0, discards: 0, lives: 0 },
    statistics: { runs: 0, wins: 0, losses: 0 },
    guide: { beat: 'start', dismissed: [] },
  };
}

export function earnedPoints(discoveredCount: number, thresholds: number[]): number {
  return thresholds.filter((threshold) => discoveredCount >= threshold).length;
}

export function spentPoints(allocation: UpgradeAllocation, config: BalanceConfig): number {
  const upgrades = config.progression.upgrades;
  return allocation.hands * upgrades.hands.cost
    + allocation.discards * upgrades.discards.cost
    + allocation.lives * upgrades.lives.cost;
}

export function reconcileProfile(
  profile: Profile,
  config: BalanceConfig,
  validMotif: (id: string) => boolean,
  validText: (id: string) => boolean,
  catalogVersion: string,
): Profile {
  const discoveredMotifIds = profile.discoveredMotifIds.filter(validMotif);
  const encounteredMotifIds = profile.encounteredMotifIds.filter(validMotif);
  const discoveredTextIds = profile.discoveredTextIds.filter(validText);
  let allocation = { ...profile.upgradeAllocation };
  const order: (keyof UpgradeAllocation)[] = ['lives', 'hands', 'discards'];
  while (allocationError(allocation, discoveredMotifIds.length, config) && order.some((key) => allocation[key] > 0)) {
    const key = order.find((item) => allocation[item] > 0);
    if (!key) break;
    allocation = { ...allocation, [key]: allocation[key] - 1 };
  }
  const dismissed = Array.isArray(profile.guide?.dismissed)
    ? profile.guide.dismissed.filter((id) => typeof id === 'string')
    : [];
  return {
    ...profile,
    catalogVersion,
    discoveredMotifIds,
    encounteredMotifIds,
    discoveredTextIds,
    upgradeAllocation: allocation,
    guide: {
      beat: profile.guide?.beat || 'start',
      dismissed,
      known: Array.isArray(profile.guide?.known) ? profile.guide.known.filter((id) => typeof id === 'string') : [],
      off: Array.isArray(profile.guide?.off) ? profile.guide.off.filter((id) => typeof id === 'string') : [],
    },
  };
}

export function allocationError(
  allocation: UpgradeAllocation,
  discoveredCount: number,
  config: BalanceConfig,
): string | null {
  const upgrades = config.progression.upgrades;
  if (allocation.hands < 0 || allocation.discards < 0 || allocation.lives < 0) return 'Levels cannot be negative.';
  if (allocation.hands > upgrades.hands.max) return 'Hand upgrade is at its cap.';
  if (allocation.discards > upgrades.discards.max) return 'Discard upgrade is at its cap.';
  if (allocation.lives > upgrades.lives.max) return 'Life upgrade is at its cap.';
  const points = earnedPoints(discoveredCount, config.progression.pointThresholds);
  if (spentPoints(allocation, config) > points) return 'That build spends more points than you have earned.';
  return null;
}
