function minimumLength(s: string): number {
  const charArr = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
      charArr[s[i].charCodeAt(0) - 97] += 1
  }

  for (let i = 0; i < charArr.length; i++) {
      if (charArr[i] < 3) continue

      if (charArr[i] % 2 === 0) charArr[i] = 2
      if (charArr[i] % 2 !== 0) charArr[i] = 1
  }

  return charArr.reduce((prev, cur) => prev + cur)
};
