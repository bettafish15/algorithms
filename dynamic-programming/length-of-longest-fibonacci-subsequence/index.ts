function lenLongestFibSubseq(arr: number[]): number {
  const n : number = arr.length;
  let result : number = 0;
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 2; i < n; i++) {
      let l : number = 0, r : number = i - 1;
      while (l < r) {
          const sum : number = arr[l] + arr[r];
          if (sum > arr[i]) r--;
          else if (sum < arr[i]) l++;
          else {
              dp[r][i] = dp[l][r] + 1;
              result = Math.max(result, dp[r][i]);
              l++;
              r--;
          }
      }
  }
  if (result !== 0) {
      return result + 2;
  }
  return 0;
};
