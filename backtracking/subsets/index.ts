function subsets(nums: number[]): number[][] {
  const result = [];

  function backtrack(stack: number[], index: number) {
    result.push([...stack]);
    for (let i = index; i < nums.length; i++) {
      stack.push(nums[i]);
      backtrack(stack, i + 1);
      stack.pop();
    }
  }

  backtrack([], 0);

  return result;
}
