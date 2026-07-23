function uniqueXorTriplets(nums: number[]): number {
    const n = nums.length;
    if (n === 1) return 1;    // only 1^1^1 = 1
    if (n === 2) return 2;    // only {1, 2}
    let p = 1;
    while (p <= n) p <<= 1;   // smallest power of two strictly greater than n
    return p;
};
