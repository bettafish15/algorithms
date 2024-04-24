function generate(numRows: number): number[][] {
    const dp = [];
    dp[0] = [1];

    for (let i = 1; i < numRows; i++) {
        dp[i] = new Array(i + 1);
        dp[i][0] = 1;
        dp[i][i] = 1;
        for (let j = 1; j < i; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }

    return dp;
}
