function getCommon(nums1: number[], nums2: number[]): number {
  const hashMap = new Map()

  for(let i = 0; i < nums1.length; i++) {
      hashMap.set(nums1[i], i)
  }

  for(let i = 0; i < nums2.length; i++) {
      if(hashMap.has(nums2[i])) return nums2[i]
  }

  return -1
};
