function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length === 1 || k === 0) return false

  let left = 0
  let right = 1
  const hashMap = new Map()
  hashMap.set(nums[left], 0)

  while (right < nums.length) {
      if (right - left <= k) {
          if (hashMap.has(nums[right])) {
              return true
          }

          hashMap.set(nums[right], right)
          right += 1
          continue
      }

      hashMap.delete(nums[left])
      left += 1
  }

  return false
};
