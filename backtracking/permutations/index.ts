function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  const backtrack = (stack: number[]) => {
    if (stack.length === nums.length) {
      res.push([...stack]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (stack.includes(nums[i])) continue;
      stack.push(nums[i]);
      backtrack(stack);
      stack.pop();
    }
  };

  backtrack([]);

  return res;
}
