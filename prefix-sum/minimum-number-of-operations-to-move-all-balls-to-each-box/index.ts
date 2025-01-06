function minOperations(boxes: string): number[] {
  const result = Array.from<number>({ length: boxes.length }).fill(0)
  const oneIndexArr: number[] = []

  for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] === '1') {
          oneIndexArr.push(i)
      }
  }

  for (let i = 0; i < boxes.length; i++) {
      result[i] = oneIndexArr.reduce((prev, cur) => prev + Math.abs(cur - i), 0)
  }

  return result
};
