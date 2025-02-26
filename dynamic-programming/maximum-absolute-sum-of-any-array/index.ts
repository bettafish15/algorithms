function maxAbsoluteSum(nums: number[]): number {
  let res1 = nums[0];
  let maxEnding = nums[0];

  let res2 = nums[0];
  let minEnding = nums[0];

  for (let i = 1; i < nums.length; i++) {
      maxEnding = Math.max(maxEnding + nums[i], nums[i]);

      res1 = Math.max(res1, maxEnding);

      minEnding = Math.min(minEnding + nums[i], nums[i]);
      res2 = Math.min(res2, minEnding);
  }

  return Math.max(Math.abs(res1), Math.abs(res2));
};
