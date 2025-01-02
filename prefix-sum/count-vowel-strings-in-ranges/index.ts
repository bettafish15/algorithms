function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
  const countArray: number[] = Array.from<number>({ length: words.length }).fill(0)

  let total = 0

  for (let i = 0; i < words.length; i++) {
      if (vowelSet.has(words[i][0])
          && vowelSet.has(words[i][words[i].length - 1])) {
              total += 1
      }

      countArray[i] = total
  }

  const resultArr: number[] = Array.from<number>({ length: queries.length }).fill(0)

  for (let i = 0; i < queries.length; i++) {
      const startIndex = queries[i][0]
      const endIndex = queries[i][1]

      const sumFromStart = countArray[endIndex]
      const sumNeedToBeSubstract = startIndex === 0 ? 0 : countArray[startIndex - 1]

      const result = sumFromStart - sumNeedToBeSubstract

      resultArr[i] = result
  }

  return resultArr
};
