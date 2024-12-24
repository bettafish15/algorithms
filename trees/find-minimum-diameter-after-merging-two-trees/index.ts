function minimumDiameterAfterMerge(edges1: number[][], edges2: number[][]): number {
  function makeGraph(edges: number[][]) {
      const graph = new Map()
      for(const [from, to] of edges) {
          if(!graph.has(from)) {
              graph.set(from, new Set([to]))
          } else {
              graph.get(from).add(to)
          }
          if(!graph.has(to)) {
              graph.set(to, new Set([from]))
          } else {
              graph.get(to).add(from)
          }
      }

      return graph
  }

  function findDiameter(graph) {
      function getFurthestNode(queueParam: number[]) {
          let visited = new Set()
          const levels: number[][] = [[]]

          while(queueParam.length > 0) {
              const numberOfNodeInLevel = queueParam.length

              for (let i = 0; i < numberOfNodeInLevel; i++) {
                  const node = queueParam.shift()
                  if(visited.has(node)) continue

                  visited.add(node)
                  levels[levels.length -1].push(node!)
                  queueParam.push(...[...graph.get(node)])
              }

              levels.push([])
          }

          return levels.filter(level => level.length !== 0)
      }

      if(graph.size === 0) return 0

      const firstLevels = getFurthestNode([graph.keys().next().value])
      const furthestLevel = firstLevels[firstLevels.length - 1]
      const secondLevels = getFurthestNode([furthestLevel[0]])

      return secondLevels.length - 1
  }

  const graph1 = makeGraph(edges1)
  const graph2 = makeGraph(edges2)
  const diameter1 = findDiameter(graph1)
  const diameter2 = findDiameter(graph2)

  return Math.max(Math.ceil(diameter1/2) + Math.ceil(diameter2/2) + 1, diameter1, diameter2)
};
