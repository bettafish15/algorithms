function findRedundantConnection(edges: number[][]): number[] {
  const N: number = edges.length;
  const visited: boolean[] = new Array(N).fill(false);
  const parent: number[] = new Array(N).fill(-1);
  const adjList: number[][] = Array.from({ length: N }, () => []);
  let cycleStart: number = -1;

  // Build adjacency list
  for (const edge of edges) {
      adjList[edge[0] - 1].push(edge[1] - 1);
      adjList[edge[1] - 1].push(edge[0] - 1);
  }

  // DFS function to find cycle
  function dfs(src: number): void {
      visited[src] = true;
      for (const adj of adjList[src]) {
          if (!visited[adj]) {
              parent[adj] = src;
              dfs(adj);
          } else if (adj !== parent[src] && cycleStart === -1) {
              // If the node is visited and the parent is different then the
              // node is part of the cycle
              cycleStart = adj;
              parent[adj] = src;
          }
      }
  }

  // Start DFS from node 0
  dfs(0);

  // Use Map to store cycle nodes
  const cycleNodes: Map<number, number> = new Map();
  let node: number = cycleStart;

  // Start from the cycleStart node and backtrack to get all the nodes in
  // the cycle. Mark them all in the map.
  while (true) {
      cycleNodes.set(node, 1);
      node = parent[node];
      if (node === cycleStart) {
          break;
      }
  }

  // If both nodes of the edge were marked as cycle nodes then this edge
  // can be removed
  for (let i = edges.length - 1; i >= 0; i--) {
      if (
          cycleNodes.has(edges[i][0] - 1) &&
          cycleNodes.has(edges[i][1] - 1)
      ) {
          return edges[i];
      }
  }

  return []; // This line should theoretically never be reached
};
