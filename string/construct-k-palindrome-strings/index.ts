function canConstruct(s: string, k: number): boolean {
  if(s.length < k) return false

  const charArr = new Array(26).fill(0)
  let oddCount = 0

  for (let i = 0; i < s.length; i++) {
      charArr[s[i].charCodeAt(0) - 97] += 1
  }

  for (let i = 0; i < charArr.length; i++) {
      if(charArr[i] % 2 !== 0) oddCount += 1
  }

  return oddCount <= k
};
