function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const charFreq = new Array(A.length + 1).fill(0)
  let count = 0
  const result: number[] = []

  for (let i = 0; i < A.length; i++) {
      if(charFreq[A[i] - 1] === 1) count += 1
      charFreq[A[i] - 1] += 1
      if(charFreq[B[i] - 1] === 1) count += 1
      charFreq[B[i] - 1] += 1

      result.push(count)
  }

  return result
};
