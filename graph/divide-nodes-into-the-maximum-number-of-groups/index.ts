function magnificentSets(n: number, edges: number[][]): number {
  // Initialize adjacency list, parent array, and depth array
  const adjList = Array.from({ length: n }, () => [] as number[]);
  const parent = Array(n).fill(-1);
  const depth = Array(n).fill(0);
  const numOfGroupsForComponent = new Map<number, number>();

  // Helper function to find the root of a node in Union-Find
  const find = (node: number): number => {
      let currentNode = node;
      while (parent[currentNode] !== -1) {
          currentNode = parent[currentNode];
      }
      return currentNode;
  };

  // Helper function to merge two sets
  const union = (node1: number, node2: number): void => {
      let root1 = find(node1);
      let root2 = find(node2);

      if (root1 === root2) return;

      if (depth[root1] < depth[root2]) {
          [root1, root2] = [root2, root1];
      }

      parent[root2] = root1;

      if (depth[root1] === depth[root2]) {
          depth[root1]++;
      }
  };

  // Helper function to calculate groups for a component
  const getNumberOfGroups = (srcNode: number): number => {
      const nodesQueue = [srcNode];
      const layerSeen = Array(n).fill(-1);
      layerSeen[srcNode] = 0;
      let deepestLayer = 0;

      while (nodesQueue.length > 0) {
          const numOfNodesInLayer = nodesQueue.length;

          for (let i = 0; i < numOfNodesInLayer; i++) {
              const currentNode = nodesQueue.shift()!;

              for (const neighbor of adjList[currentNode]) {
                  if (layerSeen[neighbor] === -1) {
                      layerSeen[neighbor] = deepestLayer + 1;
                      nodesQueue.push(neighbor);
                  } else if (layerSeen[neighbor] === deepestLayer) {
                      return -1;
                  }
              }
          }
          deepestLayer++;
      }

      return deepestLayer;
  };

  // Build adjacency list and apply Union-Find
  for (const [v1, v2] of edges) {
      adjList[v1 - 1].push(v2 - 1);
      adjList[v2 - 1].push(v1 - 1);
      union(v1 - 1, v2 - 1);
  }

  // Calculate maximum groups for each component
  for (let node = 0; node < n; node++) {
      const numberOfGroups = getNumberOfGroups(node);
      if (numberOfGroups === -1) {
          return -1;
      }

      const rootNode = find(node);
      const currentMax = numOfGroupsForComponent.get(rootNode) || 0;
      numOfGroupsForComponent.set(rootNode, Math.max(currentMax, numberOfGroups));
  }

  // Sum up all component groups
  return Array.from(numOfGroupsForComponent.values()).reduce((a, b) => a + b, 0);
};
