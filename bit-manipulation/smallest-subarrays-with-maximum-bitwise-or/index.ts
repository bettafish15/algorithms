function smallestSubarrays(nums: number[]): number[] {
    const answer = Array(nums.length).fill(0);
    const lastSeen = Array(32).fill(-1);

    for(let i = nums.length - 1; i >= 0; i--) {
        for(let j = 0; j < 32; j++) {
            if((nums[i] & (1 << j)) !== 0) {
                lastSeen[j] = i;
            }
        }

        let maxIndex = i;
        for(let j = 0; j < 32; j++) {
            if(lastSeen[j] !== -1) maxIndex = Math.max(maxIndex, lastSeen[j]);
        }

        answer[i] = maxIndex - i + 1;
    }

    return answer;
};
