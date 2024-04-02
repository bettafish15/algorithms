function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  if(k === 0) return 0

  let left = 0
  let right = 1
  let hashMap = new Map()
  hashMap.set(s[left], [0])
  let maximumLength = 1

  while (right < s.length) {
      if (!hashMap.has(s[right])) hashMap.set(s[right], [])
      hashMap.get(s[right]).push(right)

      while (hashMap.size > k) {
          hashMap.get(s[left]).shift()
          if (hashMap.get(s[left]).length === 0) hashMap.delete(s[left])

          left += 1
      }

      maximumLength = Math.max(maximumLength, right - left + 1)
      right += 1
  }

  return maximumLength
};
