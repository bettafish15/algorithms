function jump(nums: number[]): number {
    let n = nums.length
    if(n == 1) return 0
    let jumps = 1
    let reachable = nums[0]
    let maxWithinReachable = nums[0]
    if(reachable >= n-1) return jumps

    for(let i = 1; i < n; i++) {
        maxWithinReachable = Math.max(maxWithinReachable, i + nums[i])

        if(i === reachable) {
            reachable = maxWithinReachable
            jumps++
            if(reachable >= n-1) break
        }
    }

    return jumps
};
