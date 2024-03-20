function topKFrequent(nums: number[], k: number): number[] {
  const bucket: (number[])[] = new Array(nums.length + 1).fill(0).map(() => [])
  const map = new Map<number, number>()

  for(const num of nums) {
      if(!map.has(num)) map.set(num, 0)

      map.set(num, map.get(num)! + 1)
  }

  for(const [num, frequency] of map) {
      bucket[frequency].push(num)
  }

  const ans: number[] = []
  for(let i = bucket.length - 1; i >= 0 && ans.length < k; i--) {
      if(bucket[i].length !== 0) ans.push(...bucket[i])
  }
  return ans;
};
