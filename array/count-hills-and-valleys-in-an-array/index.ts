function countHillValley(nums: number[]): number {
    let res = 0;
    for (let i = 1, prev = nums[0], n = nums.length - 1; i < n; i++) {
        if (
            prev < nums[i] && nums[i] > nums[i + 1] || // hill
            prev > nums[i] && nums[i] < nums[i + 1]    // valley
        ) res++, prev = nums[i];
    }
    return res;
};
