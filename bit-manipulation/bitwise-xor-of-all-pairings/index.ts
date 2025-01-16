function xorAllNums(nums1: number[], nums2: number[]): number {
  let res = 0
  if (nums2.length % 2 === 1) {
      nums1.forEach((num) => res ^= num)
  }

  if (nums1.length % 2 === 1) {
      nums2.forEach((num) => res ^= num)
  }

  return res
};
