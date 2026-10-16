import type { BalanceConfig, Catalog, FolkloreHit, SimilarityTables } from './types';

export function motifTextCosine(tables: SimilarityTables, motifIndex: number, textIndex: number): number {
  return tables.motifText[motifIndex * tables.nTexts + textIndex] / tables.scale;
}

export interface ResonanceOptions {
  playedMotifIds: string[];
  discoveredTextIds: ReadonlySet<string>;
  config: BalanceConfig;
  threshold: number;
}

export function resonate(
  catalog: Catalog,
  tables: SimilarityTables,
  options: ResonanceOptions,
): { hits: FolkloreHit[]; bonus: number; newlyUnlockedIds: string[] } {
  const { playedMotifIds, discoveredTextIds, config, threshold } = options;
  const texts = config.texts;
  const storedThreshold = Math.round(threshold * tables.scale);
  const playedIndexes = playedMotifIds
    .map((id) => catalog.motifIndex.get(id))
    .filter((index): index is number => index !== undefined);

  const qualifying: FolkloreHit[] = [];
  for (let textIndex = 0; textIndex < catalog.texts.length; textIndex++) {
    let resonantCount = 0;
    for (const motifIndex of playedIndexes) {
      if (tables.motifText[motifIndex * tables.nTexts + textIndex] >= storedThreshold) resonantCount += 1;
    }
    if (resonantCount < texts.minResonantCards) continue;
    const text = catalog.texts[textIndex];
    const already = discoveredTextIds.has(text.id);
    const bonus = already
      ? texts.baseBonus + texts.perExtraCardBonus * (resonantCount - texts.minResonantCards)
      : 0;
    qualifying.push({
      textId: text.id,
      name: text.name,
      resonantCount,
      bonus,
      newlyDiscovered: !already,
    });
  }

  const newlyUnlockedIds = qualifying.filter((hit) => hit.newlyDiscovered).map((hit) => hit.textId).sort();
  const scoring = qualifying
    .filter((hit) => !hit.newlyDiscovered && hit.bonus > 0)
    .sort((a, b) => b.bonus - a.bonus || a.textId.localeCompare(b.textId))
    .slice(0, texts.maxActiveBonusesPerHand);
  const bonus = scoring.reduce((sum, hit) => sum + hit.bonus, 0);
  const hiddenNew = new Set(newlyUnlockedIds);
  const hits = [
    ...scoring,
    ...qualifying.filter((hit) => hiddenNew.has(hit.textId)),
  ];
  return { hits, bonus, newlyUnlockedIds };
}
