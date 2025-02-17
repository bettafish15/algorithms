function numTilePossibilities(tiles: string): number {
  const charArr = tiles.split("")
  const resultSet = new Set()
  const mapLetter = new Map()

  for(let i = 0; i < tiles.length; i++) {
      mapLetter.set(tiles[i], (mapLetter.get(tiles[i]) || 0) + 1)
  }

  const backtrack = (stack: string, idx: number) => {
      resultSet.add(stack)
      for(let i = 0; i < charArr.length; i++) {
          if(mapLetter.get(charArr[i]) === 0) continue
          stack = stack.concat(charArr[i])
          mapLetter.set(charArr[i], mapLetter.get(charArr[i]) - 1)
          backtrack(stack, i + 1)
          stack = stack.slice(0, stack.length - 1)
          mapLetter.set(charArr[i], mapLetter.get(charArr[i]) + 1)
      }
  }

  backtrack("", 0)

  return resultSet.size - 1
};
