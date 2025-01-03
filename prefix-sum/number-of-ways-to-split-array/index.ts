function waysToSplitArray(nums: number[]): number {
  const totalSum = nums.reduce((prev, cur) => prev + cur)

  let leftPartTotal = 0
  let rightPartTotal = totalSum
  let result = 0

  for (let i = 0; i < nums.length - 1; i++) {
      leftPartTotal += nums[i]
      rightPartTotal -= nums[i]

      if (leftPartTotal >= rightPartTotal) result += 1
  }

  return result
};
