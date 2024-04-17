function exist(board: string[][], word: string): boolean {
  const backtrack = (i: number, j: number, l: number) => {
    if (l === word.length) return true;
    if (i >= board.length || i < 0 || j >= board[i].length || j < 0) return;
    if (board[i][j] !== word[l]) return;

    const pre = board[i][j];
    board[i][j] = "*";

    if (backtrack(i - 1, j, l + 1) === true) return true;

    if (backtrack(i + 1, j, l + 1) === true) return true;

    if (backtrack(i, j - 1, l + 1) === true) return true;

    if (backtrack(i, j + 1, l + 1) === true) return true;

    board[i][j] = pre;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (backtrack(i, j, 0)) return true;
    }
  }

  return false;
}
