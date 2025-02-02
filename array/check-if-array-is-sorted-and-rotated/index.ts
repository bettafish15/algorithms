function check(nums: number[]): boolean {
  let rotatePoint = 0
  for (let i = 1; i < nums.length; i++) {
      if(nums[i] < nums[i - 1]) {
          rotatePoint = i
          break
      }
  }

  const newArr = [...nums.slice(rotatePoint, nums.length), ...nums.slice(0, rotatePoint)]

  for(let i = 1; i < newArr.length; i++) {
      if(newArr[i] < newArr[i - 1]) return false
  }

  return true
};
