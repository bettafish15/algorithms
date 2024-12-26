/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let result = 0

  const backtrack = (index, sum) => {
      // Base case
      if(index === nums.length) {
          if(sum === target) result++
          return
      }

      // Add current number
      backtrack(index + 1, sum + nums[index])

      // Subtract current number
      backtrack(index + 1, sum - nums[index])
  }

  backtrack(0, 0)
  return result
};
