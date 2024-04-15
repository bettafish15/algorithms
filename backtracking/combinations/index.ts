function combine(n: number, k: number): number[][] {
  const res = [];

  const backtrack = (stack: number[], idx: number) => {
    if (stack.length === k) {
      res.push([...stack]);
    }

    for (let i = idx; i <= n; i++) {
      stack.push(i);
      backtrack(stack, i + 1);
      stack.pop();
    }
  };

  backtrack([], 1);

  return res;
}
