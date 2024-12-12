function combinationSum3(k: number, n: number): number[][] {
  const answers: number[][] = []

  function backtrack(currStack: number[], index: number) {
      if(currStack.length === k && currStack.reduce((prev, cur) => prev + cur) === n) return true
      if(currStack.length === k && currStack.reduce((prev, cur) => prev + cur) !== n) return false

      for(let i = index; i < 10; i++) {
          currStack.push(i)

          if(backtrack(currStack, i + 1)) {
              answers.push([...currStack])
          }

          currStack.pop()
      }
  }

  backtrack([], 1)

  return answers
};
