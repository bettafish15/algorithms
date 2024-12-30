function countGoodStrings(low: number, high: number, zero: number, one: number): number {
  const dp = Array(high + 1), MOD = 1e9 + 7
  let sum = 0
  dp[0] = 1

  for(let i = 1; i <= high; i++) {
      dp[i] = ((i < zero ? 0 : dp[i - zero]) + (i < one ? 0 : dp[i - one])) % MOD
      if(i >= low) sum = (sum + dp[i]) % MOD
  }

  return sum
};
