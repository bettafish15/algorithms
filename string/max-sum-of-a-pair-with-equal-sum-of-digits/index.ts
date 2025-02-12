function maximumSum(nums: number[]): number {
   const digitsSums = new Map<number, number>()
   let maxValue = -1

   for (const num of nums) {
    let digitSum = 0;
    let tempNum = num
    while (tempNum > 0) {
        digitSum += tempNum % 10;
        tempNum = Math.floor(tempNum / 10);
    }

    if (digitsSums.has(digitSum)) {
      maxValue = Math.max(maxValue, num + digitsSums.get(digitSum)!)
    }

    digitsSums.set(digitSum, Math.max(digitsSums.get(digitSum) ?? 0, num))
   }

   return maxValue
};
