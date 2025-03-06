function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const frequencyArr: number[] = Array.from<number>({ length: grid.length * grid.length }).fill(0)
    const result = [-1, -1]

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            frequencyArr[grid[i][j] - 1] += 1
            if(frequencyArr[grid[i][j] - 1] === 2) {
                result[0] = grid[i][j]
            }
        }
    }

    result[1] = frequencyArr.findIndex(value => value === 0) + 1

    return result
};
