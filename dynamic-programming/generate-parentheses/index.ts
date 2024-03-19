function generateParenthesis(n: number): string[] {
  const dp: string[][] = new Array(n + 1).fill([]).map(() => []);
  dp[0] = [""];
  // console.log('dp first: ', dp)

  for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
          // console.log('i, j pair: ', i, j)
          const left: string[] = dp[j];
          // console.log('left: ', left)
          const right: string[] = dp[i - j - 1];
          // console.log('right: ', right)
          for (const l of left) {
              for (const r of right) {
                  dp[i].push(`(${l})${r}`);
              }
          }
          // console.log('dp: ', dp)
      }
  }

  return dp[n];
};
