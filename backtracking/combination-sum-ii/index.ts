function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const result: number[][] = [];
  const stack: number[] = [];

  function backtrack(idx: number) {
    const sum = stack.reduce((acc, cur) => acc + cur, 0);

    if (sum > target) return 42;
    if (sum === target) {
      result.push([...stack]);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      if (i > idx && candidates[i] === candidates[i - 1]) continue;
      stack.push(candidates[i]);
      if (backtrack(i + 1) === 42) {
        stack.pop();
        break;
      }
      stack.pop();
    }
  }

  backtrack(0);

  return result;
}
