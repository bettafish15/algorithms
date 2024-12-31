function mincostTickets(days: number[], costs: number[]): number {
  const dp = new Array(days[days.length - 1] + 1).fill(0);
  const travelDays = new Set(days);

  // Start from day 1
  for (let i = 1; i < dp.length; i++) {
      if (!travelDays.has(i)) {
          dp[i] = dp[i - 1];
          continue;
      }

      dp[i] = Math.min(
          dp[Math.max(0, i - 1)] + costs[0],  // 1-day pass
          dp[Math.max(0, i - 7)] + costs[1],  // 7-day pass
          dp[Math.max(0, i - 30)] + costs[2]  // 30-day pass
      );
  }

  return dp[dp.length - 1];
};
