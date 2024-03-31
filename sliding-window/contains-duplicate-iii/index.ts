function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
  let left = 0
  let right = 1
  const hashMap = new Map()
  hashMap.set(Math.floor(nums[0]/(valueDiff + 1)), nums[0])

  while(right < nums.length) {
      if(right - left > indexDiff) {
          let key = Math.floor(nums[left]/(valueDiff + 1))
          if(nums[left] < 0) key -=1
          hashMap.delete(key)
          left+=1
          continue
      }

      let key = nums[right] >= 0 ? Math.floor(nums[right]/(valueDiff + 1)) : Math.floor(nums[right]/(valueDiff + 1))

      if(hashMap.has(key)) return true
      if(hashMap.has(key - 1) && nums[right] - hashMap.get(key - 1) <= valueDiff) return true
      if(hashMap.has(key + 1) && hashMap.get(key + 1) - nums[right] <= valueDiff) return true

      hashMap.set(key, nums[right])

      right+=1
  }

  return false
};
