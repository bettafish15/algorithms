function canJump(nums: number[]): boolean {
  let maximumIndexTravel = 0

  for(let i = 0; i < nums.length; i++) {
      if(i > maximumIndexTravel) return false
      const current = nums[i]
      const maximumPossibleJump = current + i + 1
      maximumIndexTravel = Math.max(maximumPossibleJump - 1, maximumIndexTravel)
      if(maximumPossibleJump >= nums.length) return true
  }

  return false
};
