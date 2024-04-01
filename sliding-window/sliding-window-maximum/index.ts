function maxSlidingWindow(nums: number[], k: number): number[] {
  let left = 0
  let right = 0
  let result: number[] = []
  const queue: number[] = []

  while(right < nums.length) {
      while (queue.length - 1 >= 0 && nums[right] > queue[queue.length - 1]) queue.pop();
      queue.push(nums[right]);

      if(right - left >= k - 1) {
          result.push(queue[0])
          if(nums[left] === queue[0]) queue.shift()
          left += 1
      }
      right += 1
  }

  return result
};
