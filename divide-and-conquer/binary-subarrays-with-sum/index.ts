function numSubarraysWithSum(nums: number[], goal: number): number {
  function countContSubarraysWithSumK(nums: number[], lo: number, hi: number, k: number): number {
      if (lo === hi) {
          return nums[lo] === k ? 1 : 0;
      }

      const mid: number = Math.floor((lo + hi) / 2);

      const leftCount: number = countContSubarraysWithSumK(nums, lo, mid, k);
      const rightCount: number = countContSubarraysWithSumK(nums, mid + 1, hi, k);
      const splitCount: number = countSplitSubarraysWithSumK(nums, lo, mid, hi, k);

      return leftCount + rightCount + splitCount;
  }

  function countSplitSubarraysWithSumK(nums: number[], lo: number, mid: number, hi: number, k: number): number {
      let currentLeftSum: number = 0;
      let currentIx: number = mid;
      const leftContinousSums: number[] = [];
      const rightContinousSums: number[] = [];

      while (currentIx >= lo) {
          currentLeftSum += nums[currentIx];
          leftContinousSums.push(currentLeftSum);
          currentIx -= 1;
      }

      currentIx = mid + 1;
      let currentRightSum: number = 0;

      while (currentIx <= hi) {
          currentRightSum += nums[currentIx];
          rightContinousSums.push(currentRightSum);
          currentIx += 1;
      }

      const rightSumsLookup: Map<number, number> = new Map();

      for (const rightSum of rightContinousSums) {
          if (!rightSumsLookup.has(rightSum)) {
              rightSumsLookup.set(rightSum, 1);
          } else {
              rightSumsLookup.set(rightSum, rightSumsLookup.get(rightSum)! + 1);
          }
      }

      let splitSubarraysCount: number = 0;
      for (const leftSum of leftContinousSums) {
          const target: number = k - leftSum;
          if (rightSumsLookup.has(target)) {
              splitSubarraysCount += rightSumsLookup.get(target)!;
          }
      }

      return splitSubarraysCount;
  }

  return countContSubarraysWithSumK(nums, 0, nums.length - 1, goal);
};
