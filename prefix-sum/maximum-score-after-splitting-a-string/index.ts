function maxScore(s: string): number {
  let count1 = s[0] === '0' ? 1 : 0
  let count2 = 0

  for (const char of s.slice(1)) {
      count2 += char === '1' ? 1 : 0
  }

  let max = count1 + count2

  for (let i = 1; i < s.length - 1; i++) {
      count1 += s[i] === '0' ? 1 : 0
      count2 -= s[i] === '1' ? 1 : 0

      max = Math.max(max, count1 + count2)
  }

  return max
};
