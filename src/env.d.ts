/// <reference types="vite/client" />

declare module 'd3-delaunay' {
  export class Delaunay {
    triangles: Uint32Array;
    hull: Uint32Array;
    static from(points: ArrayLike<ArrayLike<number>>): Delaunay;
    voronoi(bounds: [number, number, number, number]): {
      cellPolygon(index: number): [number, number][] | null;
    };
  }
}
