function longestSubstring(s: string, k: number): number {
  const hashMap = new Map()

  for(let i = 0; i < s.length; i++) {
      hashMap.set(s[i], [i, (hashMap.get(s[i])?.[1] || 0) + 1])
  }

  let maxSubstring = 0

  for(const [char, value] of hashMap) {
      console.log(char, value)
      if(value[1] >= k) {
          maxSubstring += value[1]
      } else {
          return Math.max(longestSubstring(s.slice(0, value[0]), k), longestSubstring(s.slice(value[0] + 1), k))
      }

  }

  return maxSubstring
};
