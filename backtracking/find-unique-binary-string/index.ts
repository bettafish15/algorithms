function findDifferentBinaryString(nums: string[]): string {
  const binaryHash = new Set(nums)
  let res = ""

  const backtrack = (current: string): boolean => {
      if(current.length === nums.length) {
          if(!binaryHash.has(current)) {
              res = current
              return true
          }
          return false
      }

      for(let i = 0; i < 2; i++) {
          if(backtrack(current + String(i))) {
              return true
          }
      }
      return false
  }

  backtrack("")
  return res
};
