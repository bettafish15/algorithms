import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
  const MIN = Number.MIN_SAFE_INTEGER;
  const m = edges.length;

  const adjList = {};
  const dists = new Array(n).fill(MIN);

  for (let i = 0; i < n; i++) {
      adjList[i] = [];
  }

  for (let i = 0; i < m; i++) {
      const [u, v] = edges[i];
      const weight = succProb[i];

      adjList[u].push([v, weight]);
      adjList[v].push([u, weight]);
  }

  const maxHeap = new MaxPriorityQueue((x: [start: number, weight:number]) => x[1]);

  maxHeap.enqueue([ start, 1 ]);

  while (!maxHeap.isEmpty()) {
      const [ node, prob ] = maxHeap.dequeue();

      if (node === end) return prob;
      if (dists[node] > prob) continue;

      for (const [nei, weight] of adjList[node]) {
          if (prob * weight > dists[nei]) {
              dists[nei] = prob * weight;
              maxHeap.enqueue([nei, dists[nei]]);
          }
      }
  }

  return 0;
};
