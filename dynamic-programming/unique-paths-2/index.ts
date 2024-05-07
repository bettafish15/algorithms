function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const n = obstacleGrid.length;
    const m = obstacleGrid[n - 1].length;

    if (obstacleGrid[0][0] === 1) return 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = -1;
            } else {
                obstacleGrid[i][j] = 0;
            }
        }
    }

    obstacleGrid[0][0] = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 && j === 0) continue;
            if (obstacleGrid[i][j] === -1) {
                obstacleGrid[i][j] = 0;
            } else {
                const upperChoice = i - 1 >= 0 ? obstacleGrid[i - 1][j] : 0;
                const leftChoice = j - 1 >= 0 ? obstacleGrid[i][j - 1] : 0;
                obstacleGrid[i][j] = upperChoice + leftChoice;
            }
        }
    }

    return obstacleGrid[n - 1][m - 1];
}
