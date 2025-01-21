function gridGame(grid: number[][]): number {
  let result = Infinity
  const colNum = grid[0].length
  const totalSumOfFirstRow = grid[0].reduce((prev, cur) => prev + cur)
  const totalSumOfSecondRow = grid[1].reduce((prev, cur) => prev + cur)

  const prefixSum = Array.from({ length: colNum }, () => [])
  prefixSum[colNum - 1] = [0, totalSumOfSecondRow - grid[1][colNum - 1]]
  prefixSum[0] = [totalSumOfFirstRow - grid[0][0], 0]

  for (let i = colNum - 2; i > 0; i--) {
      prefixSum[i] = [prefixSum[i + 1][0] + grid[0][i + 1], prefixSum[i + 1][1] - grid[1][i]]
  }

  for (let i = 0; i < colNum; i++) {
      result = Math.min(result, Math.max(prefixSum[i][0], prefixSum[i][1]))
  }

  return result
};
