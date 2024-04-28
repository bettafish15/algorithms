function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = new Array(s.length).fill(false);

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            const sub = s.substring(j, i + 1);
            if (wordDict.includes(sub) && (j == 0 || dp[j - 1])) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length - 1];
}
