function minDistance(word1: string, word2: string): number {
    const dp = new Array(word1.length + 1)
        .fill(null)
        .map(() => new Array(word2.length + 1).fill(null).map(() => 0));

    for (let i = 1; i <= word1.length; i++) {
        dp[i][0] = i;
    }

    for (let i = 1; i <= word2.length; i++) {
        dp[0][i] = i;
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
            }
        }
    }
    return dp[word1.length][word2.length];
}

//     h o r s e
//   0 1 2 3 4 5
// r 1 1 2 3 4 5
// o 2 2 1 2 3 4
// s 3 3 2 2 2 3

//   s e a
// e 1 1 2
// a 2 2 1
// t 3 3 2
