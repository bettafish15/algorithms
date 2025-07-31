function subarrayBitwiseORs(arr: number[]): number {
    const res = new Set<number>()
    let cur = new Set<number>()

    for(let num of arr) {
        let next = new Set<number>()
        next.add(num)

        for(let x of cur) next.add((num | x))
        cur = next

        for(let x of cur) res.add(x)
    }

    return res.size
};
