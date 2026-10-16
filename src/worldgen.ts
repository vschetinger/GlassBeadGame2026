import { Delaunay } from 'd3-delaunay';
import type { BalanceConfig, RegionState, SimilarityTables } from './types';
import type { Rng } from './rng';

function cosineMotifDeity(tables: SimilarityTables, motifIndex: number, deityIndex: number): number {
  return tables.motifDeity[motifIndex * tables.nDeities + deityIndex] / tables.scale;
}

function cosineDeity(tables: SimilarityTables, a: number, b: number): number {
  return tables.deityDeity[a * tables.nDeities + b] / tables.scale;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function targetScore(hop: number, size: number, config: BalanceConfig): number {
  const difficulty = config.difficulty;
  const sizeFactor = clamp(
    1 + difficulty.sizeSlope * (size - difficulty.expectedRegionSize),
    difficulty.sizeMin,
    difficulty.sizeMax,
  );
  const raw = difficulty.baseTarget * difficulty.hopMultiplier ** hop * sizeFactor;
  return Math.max(difficulty.scoreStep, Math.round(raw / difficulty.scoreStep) * difficulty.scoreStep);
}

function selectDeities(
  rng: Rng,
  motifIndexes: number[],
  deityCount: number,
  config: BalanceConfig,
  tables: SimilarityTables,
): number[] {
  const { regionsPerRun, optimizationSwaps, optimizationNoise } = config.world;
  const unused = new Set<number>(Array.from({ length: deityCount }, (_, index) => index));
  const selected: number[] = [];
  const bestDist = motifIndexes.map(() => Number.POSITIVE_INFINITY);

  const costOf = (deity: number, current: number[]) => {
    const noise = optimizationNoise > 0 ? 1 + optimizationNoise * (rng.next() - 0.5) : 1;
    let cost = 0;
    for (let i = 0; i < motifIndexes.length; i++) {
      const dist = 1 - cosineMotifDeity(tables, motifIndexes[i], deity);
      cost += Math.min(current[i], dist);
    }
    return cost * noise;
  };

  for (let placed = 0; placed < regionsPerRun; placed++) {
    let bestId = -1;
    let bestCost = Number.POSITIVE_INFINITY;
    for (const deity of [...unused].sort((a, b) => a - b)) {
      const cost = costOf(deity, bestDist);
      if (cost < bestCost - 1e-9 || (Math.abs(cost - bestCost) <= 1e-9 && (bestId < 0 || deity < bestId))) {
        bestCost = cost;
        bestId = deity;
      }
    }
    if (bestId < 0) break;
    selected.push(bestId);
    unused.delete(bestId);
    for (let i = 0; i < motifIndexes.length; i++) {
      bestDist[i] = Math.min(bestDist[i], 1 - cosineMotifDeity(tables, motifIndexes[i], bestId));
    }
  }

  const assignmentCost = (choice: number[]) => {
    let cost = 0;
    for (const motif of motifIndexes) {
      let best = Number.POSITIVE_INFINITY;
      for (const deity of choice) best = Math.min(best, 1 - cosineMotifDeity(tables, motif, deity));
      cost += best;
    }
    return cost;
  };

  for (let pass = 0; pass < optimizationSwaps; pass++) {
    let improved = false;
    for (let slot = 0; slot < selected.length; slot++) {
      for (const candidate of [...unused].sort((a, b) => a - b)) {
        const trial = selected.slice();
        trial[slot] = candidate;
        if (assignmentCost(trial) + 1e-9 < assignmentCost(selected)) {
          unused.add(selected[slot]);
          unused.delete(candidate);
          selected[slot] = candidate;
          improved = true;
        }
      }
    }
    if (!improved) break;
  }
  return selected;
}

function assignMotifs(
  motifIndexes: number[],
  selected: number[],
  minSize: number,
  tables: SimilarityTables,
): number[][] {
  const buckets = selected.map(() => [] as number[]);
  for (const motif of motifIndexes) {
    let bestSlot = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    for (let slot = 0; slot < selected.length; slot++) {
      const dist = 1 - cosineMotifDeity(tables, motif, selected[slot]);
      if (dist < bestDist - 1e-12 || (Math.abs(dist - bestDist) <= 1e-12 && selected[slot] < selected[bestSlot])) {
        bestDist = dist;
        bestSlot = slot;
      }
    }
    buckets[bestSlot].push(motif);
  }

  let guard = motifIndexes.length;
  while (buckets.some((bucket) => bucket.length < minSize) && guard-- > 0) {
    const needy = buckets.findIndex((bucket) => bucket.length < minSize);
    let donor = -1;
    let donorSize = minSize;
    for (let slot = 0; slot < buckets.length; slot++) {
      if (buckets[slot].length > donorSize) {
        donor = slot;
        donorSize = buckets[slot].length;
      }
    }
    if (donor < 0 || needy < 0) break;
    let moveAt = 0;
    let closest = Number.POSITIVE_INFINITY;
    for (let index = 0; index < buckets[donor].length; index++) {
      const dist = 1 - cosineMotifDeity(tables, buckets[donor][index], selected[needy]);
      if (dist < closest) {
        closest = dist;
        moveAt = index;
      }
    }
    const [moved] = buckets[donor].splice(moveAt, 1);
    buckets[needy].push(moved);
  }
  return buckets;
}

function classicalMds(distances: number[][]): [number, number][] {
  const n = distances.length;
  const squared = distances.map((row) => row.map((value) => value * value));
  const rowMean = squared.map((row) => row.reduce((sum, value) => sum + value, 0) / n);
  const grand = rowMean.reduce((sum, value) => sum + value, 0) / n;
  const b = squared.map((row, i) => row.map((value, j) => -0.5 * (value - rowMean[i] - rowMean[j] + grand)));

  const eigen = (matrix: number[][]) => {
    const size = matrix.length;
    let vector = Array.from({ length: size }, (_, index) => Math.sin(index * 1.7 + 0.3));
    let norm = Math.hypot(...vector) || 1;
    vector = vector.map((value) => value / norm);
    for (let iter = 0; iter < 80; iter++) {
      const next = Array(size).fill(0);
      for (let i = 0; i < size; i++) {
        let sum = 0;
        for (let j = 0; j < size; j++) sum += matrix[i][j] * vector[j];
        next[i] = sum;
      }
      norm = Math.hypot(...next) || 1;
      vector = next.map((value) => value / norm);
    }
    let value = 0;
    for (let i = 0; i < size; i++) {
      let sum = 0;
      for (let j = 0; j < size; j++) sum += matrix[i][j] * vector[j];
      value += vector[i] * sum;
    }
    return { value, vector };
  };

  const first = eigen(b);
  const deflated = b.map((row, i) => row.map((value, j) => value - first.value * first.vector[i] * first.vector[j]));
  const second = eigen(deflated);
  return first.vector.map((x, index) => [
    x * Math.sqrt(Math.max(first.value, 0)),
    second.vector[index] * Math.sqrt(Math.max(second.value, 0)),
  ]);
}

function link(neighbors: number[][], a: number, b: number) {
  if (a === b) return;
  if (!neighbors[a].includes(b)) neighbors[a].push(b);
  if (!neighbors[b].includes(a)) neighbors[b].push(a);
}

function components(neighbors: number[][]): number[][] {
  const seen = new Set<number>();
  const groups: number[][] = [];
  for (let start = 0; start < neighbors.length; start++) {
    if (seen.has(start)) continue;
    const group: number[] = [];
    const queue = [start];
    seen.add(start);
    while (queue.length) {
      const node = queue.pop()!;
      group.push(node);
      for (const next of neighbors[node]) {
        if (!seen.has(next)) {
          seen.add(next);
          queue.push(next);
        }
      }
    }
    groups.push(group);
  }
  return groups;
}

function hopDistances(neighbors: number[][], start: number): number[] {
  const dist = neighbors.map(() => Number.POSITIVE_INFINITY);
  dist[start] = 0;
  const queue = [start];
  while (queue.length) {
    const node = queue.shift()!;
    for (const next of neighbors[node]) {
      if (dist[next] > dist[node] + 1) {
        dist[next] = dist[node] + 1;
        queue.push(next);
      }
    }
  }
  return dist;
}

function eccentricity(neighbors: number[][], start: number): number {
  return Math.max(...hopDistances(neighbors, start).filter((value) => Number.isFinite(value)));
}

export function generateRegions(
  rng: Rng,
  config: BalanceConfig,
  motifIds: string[],
  deityIds: string[],
  tables: SimilarityTables,
): { regions: RegionState[]; worldMotifIds: string[] } {
  if (config.world.motifsPerRun > motifIds.length) {
    throw new Error(`Only ${motifIds.length} motifs are eligible; the run asks for ${config.world.motifsPerRun}.`);
  }
  if (config.world.regionsPerRun > deityIds.length) {
    throw new Error(`Only ${deityIds.length} deities are available; the run asks for ${config.world.regionsPerRun}.`);
  }

  const motifOrder = rng.shuffle(motifIds.map((_, index) => index)).slice(0, config.world.motifsPerRun);
  const selected = selectDeities(rng, motifOrder, deityIds.length, config, tables);
  const buckets = assignMotifs(motifOrder, selected, config.world.minMotifsPerRegion, tables);

  const distances = selected.map((_, i) => selected.map((_, j) => {
    const cosine = cosineDeity(tables, selected[i], selected[j]);
    return Math.sqrt(Math.max(0, 2 - 2 * cosine));
  }));
  let points = classicalMds(distances);
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < i; j++) {
      const dx = points[i][0] - points[j][0];
      const dy = points[i][1] - points[j][1];
      if (dx * dx + dy * dy < 1e-8) {
        points[i] = [points[i][0] + 0.02 * (i + 1), points[i][1] + 0.01 * (i + 1)];
      }
    }
  }
  const xs = points.map((point) => point[0]);
  const ys = points.map((point) => point[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const span = Math.max(maxX - minX, maxY - minY, 1e-6);
  points = points.map(([x, y]) => [80 + ((x - minX) / span) * 840, 70 + ((y - minY) / span) * 560]);

  const delaunay = Delaunay.from(points as [number, number][]);
  const neighbors = points.map(() => [] as number[]);
  for (let triangle = 0; triangle < delaunay.triangles.length; triangle += 3) {
    const a = delaunay.triangles[triangle];
    const b = delaunay.triangles[triangle + 1];
    const c = delaunay.triangles[triangle + 2];
    link(neighbors, a, b);
    link(neighbors, b, c);
    link(neighbors, c, a);
  }
  let groups = components(neighbors);
  while (groups.length > 1) {
    let best = Number.POSITIVE_INFINITY;
    let pair: [number, number] = [groups[0][0], groups[1][0]];
    for (const a of groups[0]) {
      for (let groupIndex = 1; groupIndex < groups.length; groupIndex++) {
        for (const b of groups[groupIndex]) {
          const dist = 1 - cosineDeity(tables, selected[a], selected[b]);
          if (dist < best) {
            best = dist;
            pair = [a, b];
          }
        }
      }
    }
    link(neighbors, pair[0], pair[1]);
    groups = components(neighbors);
  }

  const hull = [...delaunay.hull];
  const hullChoices = hull.length ? hull : points.map((_, index) => index);
  const bestReach = Math.max(...hullChoices.map((index) => eccentricity(neighbors, index)));
  const periphery = hullChoices.filter((index) => eccentricity(neighbors, index) === bestReach);
  const startLocal = periphery[rng.int(periphery.length)];
  const hops = hopDistances(neighbors, startLocal);

  const pad = 90;
  const voronoi = delaunay.voronoi([
    Math.min(...points.map((point) => point[0])) - pad,
    Math.min(...points.map((point) => point[1])) - pad,
    Math.max(...points.map((point) => point[0])) + pad,
    Math.max(...points.map((point) => point[1])) + pad,
  ]);

  const regions: RegionState[] = selected.map((deityIndex, local) => {
    const polygon = voronoi.cellPolygon(local) as [number, number][] | null;
    const motifIdsForRegion = buckets[local].map((index) => motifIds[index]).sort();
    return {
      id: `region-${deityIds[deityIndex]}`,
      deityId: deityIds[deityIndex],
      motifIds: motifIdsForRegion,
      centroid: points[local],
      polygon: polygon ?? [
        [points[local][0] - 30, points[local][1] - 30],
        [points[local][0] + 30, points[local][1] - 30],
        [points[local][0] + 30, points[local][1] + 30],
        [points[local][0] - 30, points[local][1] + 30],
      ],
      neighborRegionIds: [],
      hopDistance: hops[local],
      targetScore: targetScore(hops[local], motifIdsForRegion.length, config),
    };
  });

  const idByLocal = regions.map((region) => region.id);
  regions.forEach((region, local) => {
    region.neighborRegionIds = neighbors[local].map((index) => idByLocal[index]).sort();
  });

  return {
    regions,
    worldMotifIds: motifOrder.map((index) => motifIds[index]).sort(),
  };
}
