function longestSubarray(nums: number[]): number {
    const maxNum = Math.max(...nums);

    let maxLengthFound = 0, currLength = 0;
    for(let num of nums) {
        if(num === maxNum) {
            currLength++;
            maxLengthFound = Math.max(maxLengthFound, currLength);
        } else {
            currLength = 0;
        }
    }

    return maxLengthFound;
};
