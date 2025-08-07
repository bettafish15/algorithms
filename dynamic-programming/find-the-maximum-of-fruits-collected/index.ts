function maxCollectedFruits(fruits: number[][]): number {
    let res = 0
    const n = fruits[0].length

    for (let i = 0; i < n; i++) {
        res += fruits[i][i]
    }

    const dp = (): number => {
        let prev = new Array(n).fill(Number.MIN_SAFE_INTEGER);
        let curr = new Array(n).fill(Number.MIN_SAFE_INTEGER);

        prev[n - 1] = fruits[0][n - 1];

        for (let i = 1; i < n - 1; i++) {
            const start = Math.max(n - 1 - i, i + 1);
            for (let j = start; j < n; j++) {
                let best = prev[j];
                if (j - 1 >= 0) best = Math.max(best, prev[j - 1]);
                if (j + 1 < n) best = Math.max(best, prev[j + 1]);
                curr[j] = best + fruits[i][j];
            }
            [prev, curr] = [curr, prev];
        }

        return prev[n - 1];
    };

    res += dp();

    // Flip along main diagonal (transpose)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = fruits[i][j];
            fruits[i][j] = fruits[j][i];
            fruits[j][i] = tmp;
        }
    }

    res += dp();

    return res;
};
