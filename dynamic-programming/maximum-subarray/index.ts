function maxSubArray(nums: number[]): number {
    const dp = new Array(nums.length);
    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const currentMax = Math.max(nums[i], dp[i - 1] + nums[i]);
        dp[i] = currentMax;
    }

    return Math.max(...dp);
}
