function minimizeXor(num1: number, num2: number): number {
  const num2Ones = countOnesPositive(num2)

  return getMinimalXor(num1, num2Ones)
};

function getMinimalXor(num: number, ones: number) {
  //let index = Math.floor(Math.log2(num))
  let index = Math.max(Math.floor(Math.log2(num)),ones-1)
  let ans = 0
  let one = 0
  while (index >= ones && ones > 0) {
      one = (num & (1 << index))
      if (one) {
          ones--
          ans += 1 << index
      }
      index--
  }
  while(index>=0 && ones>0){
      ans+= 1<<index
      index--
      ones--
  }
  return ans
}

function countOnesPositive(n: number) {
  let count = 0
  while (n > 0) {
      count += n & 1
      n = n >> 1
  }
  return count
}
