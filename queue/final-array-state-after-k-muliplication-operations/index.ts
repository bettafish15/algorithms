import { MinPriorityQueue } from "@datastructures-js/priority-queue"

function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  const pq = new MinPriorityQueue((a: any) => a.value * nums.length + a.index)

  for(let i = 0; i < nums.length; i++) {
      pq.enqueue({ index: i, value: nums[i] })
  }

  for(let i = 0; i < k; i++) {
      const index = pq.dequeue().element.index
      nums[index] *= multiplier
      pq.enqueue({index, value: nums[index]})
  }
  return nums
};
