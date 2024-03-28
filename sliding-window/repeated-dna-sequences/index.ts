function findRepeatedDnaSequences(s: string): string[] {
  if(s.length <= 10) return []
  const result: string[] = []

  let left = 0
  let right = 10
  const hashMap = new Map<string, number>()

  while(right <= s.length) {
      const substring = s.substring(left, right)
      if(!hashMap.has(substring)) hashMap.set(substring, 0)
      hashMap.set(substring, hashMap.get(substring)!+1)
      left++
      right++
  }

  for(const [key, value] of hashMap) {
      if(value > 1) result.push(key)
  }

  return result
};
