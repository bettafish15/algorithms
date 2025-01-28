function findMaxFish(grid: number[][]): number {
  let result = 0
  const row = grid.length
  const col = grid[0].length

  for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
          if (grid[i][j] <= 0) continue
          const groupValue = traverseAllAdjCell(grid, i, j)
          if(groupValue > result) result = groupValue
      }
  }

  function traverseAllAdjCell(grid: number[][], i: number, j: number) {
      let groupResult = 0
      const queue = [[i, j]]

      while(queue.length > 0) {
          let [i, j] = queue.pop() as [number, number]
          const cellValue = grid[i]?.[j]
          if(!!cellValue && cellValue > 0) {
              groupResult += cellValue
              grid[i][j] = -1

              queue.push([i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1])
          }
      }

      return groupResult
  }

  return result
};
