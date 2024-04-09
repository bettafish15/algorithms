/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const backtrack = () => {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        if (board[row][column] !== ".") continue;

        for (let choice = 1; choice <= 9; choice++) {
          if (validate(board, row, column, String(choice))) {
            board[row][column] = String(choice);
            if (backtrack()) return true;
            board[row][column] = ".";
          }
        }

        return false;
      }
    }

    return true;
  };

  const validate = (
    board: string[][],
    row: number,
    column: number,
    choice: string,
  ) => {
    for (let i = 0; i < 9; i++) {
      if (
        board[row][i] === choice ||
        board[i][column] === choice ||
        board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
          3 * Math.floor(column / 3) + (i % 3)
        ] === choice
      ) {
        return false;
      }
    }

    return true;
  };

  backtrack();
}
