function getRow(rowIndex: number): number[] {
    const dp = new Array(rowIndex).fill(null).map(() => []);
    dp[0] = [1];
    dp[1] = [1, 1];

    for (let i = 2; i <= rowIndex; i++) {
        dp[i] = [1];
        for (let j = 1; j < dp[i - 1].length; j++) {
            dp[i].push(dp[i - 1][j - 1] + dp[i - 1][j]);
        }
        dp[i].push(1);
    }

    return dp[rowIndex];
}
