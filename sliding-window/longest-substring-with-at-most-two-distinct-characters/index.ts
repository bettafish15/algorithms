function lengthOfLongestSubstringTwoDistinct(s: string): number {
  const distinctChar = new Map()
  let longestLength = 0
  let left = 0

  for (let i = 0; i < s.length; i++) {
      if (!distinctChar.has(s[i])) distinctChar.set(s[i], [])
      distinctChar.get(s[i]).push(i)

      if (distinctChar.size > 2) {
          for (const [key, value] of distinctChar) {
              if (key !== s[i - 1] && key !== s[i]) {
                  const lastIndex = distinctChar.get(key).pop()
                  distinctChar.delete(key)
                  left = lastIndex + 1
                  break
              }
          }
      } else {
          longestLength = Math.max(longestLength, i + 1 - left)
      }
  }

  return longestLength
};
