function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)
  const ans: number[][] = []

  const backtrack = (currStack: number[], index) => {
      const totalSum = currStack.reduce((acc, cur) => acc + cur, 0)

      if (totalSum === target) {
          ans.push([...currStack])
          return
      }

      if (totalSum > target) return 42


      for (let i = index; i < candidates.length; i++) {
          currStack.push(candidates[i])

          if (backtrack(currStack, i) === 42) {
              currStack.pop()
              break
          }

          currStack.pop()
      }
  }

  backtrack([], 0)

  return ans
};
