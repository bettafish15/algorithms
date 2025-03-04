function checkPowersOfThree(n: number): boolean {
  const powers: number[] = [];
  let power = 1;
  while (power <= n) {
      powers.push(power);
      power *= 3;
  }

  const backtrack = (index: number, sum: number) => {
      // Base case: if we've found the target sum
      if (sum === n) {
          return true;
      }

      // Base case: if we've exceeded the target or run out of options
      if (sum > n || index >= powers.length) {
          return false;
      }

      // Option 1: Include the current power of 3
      if (backtrack(index + 1, sum + powers[index])) {
          return true;
      }

      // Option 2: Skip the current power of 3
      return backtrack(index + 1, sum);
  }

  return backtrack(0, 0);
};
