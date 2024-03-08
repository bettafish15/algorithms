function subsets(nums: number[]): number[][] {
    const result: number[][] = []

    function backtrack(cur: number[], index: number) {
        result.push([...cur])
        for(let i = index; i < nums.length; i++) {
            cur.push(nums[i])
            backtrack(cur, ++i)
            cur.pop()
        }
    }

    backtrack([], 0)

    return result
};
