import type { Catalog, CatalogFile, SimilarityTables } from './types';

function indexById<T extends { id: string }>(items: T[]): Map<string, number> {
  return new Map(items.map((item, index) => [item.id, index]));
}

export async function loadGameData(base = import.meta.env.BASE_URL): Promise<{ catalog: Catalog; tables: SimilarityTables }> {
  const root = base.endsWith('/') ? base : `${base}/`;
  const response = await fetch(`${root}data/catalog.json`);
  if (!response.ok) {
    throw new Error('Catalog missing. From the project folder, run: python3 scripts/build_catalog.py');
  }
  const file = await response.json() as CatalogFile;
  const binary = await fetch(`${root}data/similarities.bin`);
  if (!binary.ok) throw new Error('Similarity table missing. Rebuild the catalog.');
  const buffer = await binary.arrayBuffer();
  const view = new DataView(buffer);
  const magic = String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3));
  if (magic !== 'GBG1') throw new Error('Similarity table has an unexpected header.');
  const nMotifs = view.getUint32(8, true);
  const nDeities = view.getUint32(12, true);
  const nTexts = view.getUint32(16, true);
  const scale = view.getUint32(20, true);
  if (nMotifs !== file.motifs.length || nDeities !== file.deities.length || nTexts !== file.texts.length) {
    throw new Error('Catalog and similarity table are out of date with each other.');
  }
  let offset = 28;
  const take = (count: number) => {
    const array = new Int16Array(buffer, offset, count);
    offset += count * 2;
    return array;
  };
  const tables: SimilarityTables = {
    nMotifs,
    nDeities,
    nTexts,
    scale,
    motifDeity: take(nMotifs * nDeities),
    motifText: take(nMotifs * nTexts),
    deityDeity: take(nDeities * nDeities),
  };
  return {
    tables,
    catalog: {
      ...file,
      motifIndex: indexById(file.motifs),
      deityIndex: indexById(file.deities),
      textIndex: indexById(file.texts),
    },
  };
}
