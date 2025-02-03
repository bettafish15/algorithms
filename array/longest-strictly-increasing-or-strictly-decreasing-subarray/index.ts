function longestMonotonicSubarray(nums: number[]): number {
  let increasingSubArrLengthCounter = 1
  let maxIncreasingSubArrLength = 1
  let decreasingSubArrLengthCounter = 1
  let maxDecreasingSubArrLength = 1
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
          decreasingSubArrLengthCounter = 1
          increasingSubArrLengthCounter += 1
      }
      else if (nums[i] < nums[i - 1]) {
          increasingSubArrLengthCounter = 1
          decreasingSubArrLengthCounter += 1
      }
      else {
          increasingSubArrLengthCounter = 1
          decreasingSubArrLengthCounter = 1
      }

      maxDecreasingSubArrLength = Math.max(decreasingSubArrLengthCounter, maxDecreasingSubArrLength)
      maxIncreasingSubArrLength = Math.max(maxIncreasingSubArrLength, increasingSubArrLengthCounter)
  }

  return Math.max(maxDecreasingSubArrLength, maxIncreasingSubArrLength, increasingSubArrLengthCounter, decreasingSubArrLengthCounter)
};
