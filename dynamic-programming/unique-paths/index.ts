function uniquePaths(m: number, n: number): number {
    if (m === 1 || n === 1) return 1;
    const dp = Array.from({ length: m }, (_) => new Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}
