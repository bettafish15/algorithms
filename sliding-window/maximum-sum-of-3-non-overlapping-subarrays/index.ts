/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  const sums: number[] = Array.from({ length: nums.length - k + 1 }).fill(0) as number[]

  let windowSum = 0

  for (let i = 0; i < nums.length; i++) {
      windowSum += nums[i]
      if(i >= k - 1) {
          sums[i - k + 1] = windowSum
          windowSum -= nums[i - k + 1]
      }
  }

  const left: number[] = Array.from({ length: sums.length }).fill(0) as number[]
  let indexOfMaxLeftSum = 0

  for (let i = 0; i < sums.length; i++) {
      if (sums[i] > sums[indexOfMaxLeftSum]) {
          indexOfMaxLeftSum = i
      }

      left[i] = indexOfMaxLeftSum
  }

  const right: number[] = Array.from({ length: sums.length }).fill(0) as number[]
  let indexOfMaxRightSum = sums.length - 1

  for(let i = sums.length - 1; i >= 0; i--) {
      if(sums[i] >= sums[indexOfMaxRightSum]) {
          indexOfMaxRightSum = i
      }

      right[i] = indexOfMaxRightSum
  }

  let maxSum: number = 0
  const result = []

  for(let mid = k; mid < sums.length - k; mid++) {
      const l = left[mid - k]
      const r = right[mid + k]
      const totalSum: number = sums[l] + sums[mid] + sums[r]

      if(totalSum > maxSum) {
          maxSum = totalSum;
          (result as any)[0] = l;
          (result as any)[1] = mid;
          (result as any)[2] = r;
      }
  }

  return result
};
