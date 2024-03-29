function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0
  let right = 0

  let result = Number.MAX_SAFE_INTEGER
  let sum = 0

  while(right < nums.length || sum >= target) {
      if(sum < target) {
          sum+=nums[right]
          right+=1
      } else {
          result = Math.min(result, right - left)
          sum-=nums[left]
          left+=1
      }
  }

  return left === 0 ? 0 : result
};
