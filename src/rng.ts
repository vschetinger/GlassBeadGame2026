export function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export interface Rng {
  next(): number;
  state(): number;
  int(maxExclusive: number): number;
  shuffle<T>(items: T[]): T[];
}

export function mulberry32(state: number): Rng {
  let a = state >>> 0;
  return {
    next() {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    },
    state: () => a >>> 0,
    int(maxExclusive: number) {
      return Math.floor(this.next() * maxExclusive);
    },
    shuffle<T>(items: T[]) {
      const copy = items.slice();
      for (let i = copy.length - 1; i > 0; i--) {
        const j = this.int(i + 1);
        const tmp = copy[i];
        copy[i] = copy[j];
        copy[j] = tmp;
      }
      return copy;
    },
  };
}

export function rngFromSeed(seed: string): Rng {
  return mulberry32(hashSeed(seed) || 1);
}
