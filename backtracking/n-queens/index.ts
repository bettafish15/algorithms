function solveNQueens(n: number): string[][] {
  const res: number[][] = [];

  const backtrack = (stack: number[]) => {
    if (stack.length === n) {
      res.push([...stack]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!isValidPlacement(stack, i)) continue;
      stack.push(i);
      backtrack(stack);
      stack.pop();
    }
  };

  const isValidPlacement = (stack: number[], position: number): boolean => {
    return stack.every((placement, idx) => {
      if (placement === position) return false;
      if (Math.abs(position - placement) === stack.length - idx) return false;
      return true;
    });
  };

  backtrack([]);

  return res.map((solution) => {
    return solution.map((rowIndex: number) => {
      return new Array(n)
        .fill(".")
        .map((el, idx) => (idx === rowIndex ? "Q" : "."))
        .join("");
    });
  });
}
