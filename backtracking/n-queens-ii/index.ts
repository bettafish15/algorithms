function totalNQueens(n: number): number {
  const res = [];
  const backtrack = (stack: number[]) => {
    if (stack.length === n) {
      res.push([...stack]);
    }

    for (let i = 0; i < n; i++) {
      if (!isValidPlacement(stack, i)) continue;
      stack.push(i);
      backtrack(stack);
      stack.pop();
    }
  };

  const isValidPlacement = (stack: number[], nextPlacement: number) => {
    return stack.every((placement, idx) => {
      if (placement === nextPlacement) return false;
      if (Math.abs(nextPlacement - placement) === stack.length - idx)
        return false;

      return true;
    });
  };

  backtrack([]);

  return res.length;
}
