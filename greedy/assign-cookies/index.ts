function findContentChildren(g: number[], s: number[]): number {
  const greedSort = g.sort((a, b) => b - a);
  const cookieSort = s.sort((a, b) => b - a);
  let result = 0;

  while (greedSort.length && cookieSort.length) {
    if (greedSort[greedSort.length - 1] <= cookieSort[cookieSort.length - 1]) {
      result += 1;
      greedSort.pop();
    }

    cookieSort.pop();
  }

  return result;
}
