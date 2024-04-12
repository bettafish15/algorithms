function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const seen: Set<string> = new Set<string>();

  const backtrack = (stack: number[], str: string = "") => {
    if (stack.length === nums.length) {
      if (seen.has(str)) return;
      seen.add(str);
      res.push([...stack.map((el) => nums[el])]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (stack.includes(i)) continue;
      stack.push(i);
      backtrack(stack, str + nums[i]);
      stack.pop();
    }
  };

  backtrack([]);

  return res;
}
