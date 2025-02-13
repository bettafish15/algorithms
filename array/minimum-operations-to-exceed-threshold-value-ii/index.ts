import { MinPriorityQueue } from "@datastructures-js/priority-queue"

function minOperations(nums: number[], k: number): number {
  const queue = new MinPriorityQueue<number>()
  let result = 0

  for (let i = 0; i < nums.length; i++) {
      queue.enqueue(nums[i])
  }

  while(true) {
      const ele1 = queue.dequeue()
      const ele2 = queue.dequeue()

      if(ele1 >= k) break

      queue.enqueue(Math.min(ele1 as number, ele2 as number) * 2 + Math.max(ele1 as number, ele2 as number))
      result += 1
  }


  return result
};
