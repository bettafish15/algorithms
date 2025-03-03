function pivotArray(nums: number[], pivot: number): number[] {
  const beforePivotArr: number[] = []
  const afterPivotArr: number[] = []
  const middleArr: number[] = []

  for(let i = 0; i < nums.length; i++) {
      if(nums[i] < pivot) beforePivotArr.push(nums[i])
      else if(nums[i] === pivot) middleArr.push(nums[i])
      else {
          afterPivotArr.push(nums[i])
      }
  }

  return beforePivotArr.concat(middleArr).concat(afterPivotArr)
};
