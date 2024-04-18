function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result = [];
  const map = new Map();

  const backtrack = (stack: number[], idx: number) => {
    if (map.has(stack.join(""))) return;
    result.push([...stack]);
    map.set(stack.join(""), true);

    for (let i = idx; i < nums.length; i++) {
      stack.push(nums[i]);
      backtrack(stack, i + 1);
      stack.pop();
    }
  };

  backtrack([], 0);
  return result;
}
