const phone = {
  "2": ['a', 'b', 'c'],
  "3": ['d', 'e', 'f'],
  "4": ['g', 'h', 'i'],
  "5": ['j', 'k', 'l'],
  "6": ['m', 'n', 'o'],
  "7": ['p', 'q', 'r', 's'],
  "8": ['t', 'u', 'v'],
  "9": ['w', 'x', 'y', 'z'],
}

function letterCombinations(digits: string): string[] {
  const result: string[] = []

  if(digits.length === 0) return []

  const possibleValues: string[][] = digits.split('').map(d => phone[d])

  const backtrackHelper = (choices: string[][], cb, prefix?) => {
      if(!choices.length) return cb(prefix)

      for(let c = 0; c < choices[0].length; c++) {
          backtrackHelper(choices.slice(1), cb, (prefix || []).concat(choices[0][c]))
      }
  }

  backtrackHelper(possibleValues, (value) => {
      if(value) result.push(value.join(''))
  })

  return result
};
