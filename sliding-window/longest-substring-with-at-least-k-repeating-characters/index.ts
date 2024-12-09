function longestSubstring(s: string, k: number): number {
  let longestSubstring = 0
  const numberOfUniqChar = (new Set(s.split(''))).size

  for(let i = 1; i <= numberOfUniqChar; i++) {
    let left = 0
    let right = 0
    const charFrequency = new Map()

    while(right < s.length) {
        if(charFrequency.size <= i) {
            charFrequency.set(s[right], (charFrequency.get(s[right]) || 0) + 1)
            right += 1;
        } else {
            charFrequency.set(s[left], charFrequency.get(s[left]) - 1)
            if(!charFrequency.get(s[left])) charFrequency.delete(s[left])
            left += 1;
        }

        if(Array.from(charFrequency.values()).every(el => el >= k)) {
            if(right - left > longestSubstring) {
                longestSubstring = right - left
            }
        }
    }
  }

  return longestSubstring
};
