function shiftGrid(grid: number[][], k: number): number[][] {
    const rows = grid.length
    const cols = grid[0].length
    const arr = grid.flat()
    const realShiftNumber = k % arr.length
    const removed = arr.splice(arr.length - realShiftNumber, realShiftNumber);
    arr.unshift(...removed);

    const matrix = [];
    for (let i = 0; i < arr.length; i += cols) {
        matrix.push(arr.slice(i, i + cols));
    }
    return matrix;
};
