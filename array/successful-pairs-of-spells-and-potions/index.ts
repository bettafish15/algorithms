function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const result = []
    potions.sort((a, b) => a - b)

    for(let i = 0; i < spells.length; i++) {
        const remain = Math.ceil(success / spells[i])

        const potionIndex = findSmallestGreaterOrEqual(potions, remain)

        if(potionIndex === null || potionIndex === undefined || potionIndex === -1) {
            result.push(0)
            continue
        }

        result.push(potions.length - potionIndex)
    }


    return result
};

function findSmallestGreaterOrEqual(arr: number[], target: number) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1; // Stores the potential answer (index)

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] >= target) {
      ans = mid; // This is a potential answer, try to find a smaller one to the left
      high = mid - 1;
    } else {
      low = mid + 1; // Current element is too small, search in the right half
    }
  }
  return ans;
}
