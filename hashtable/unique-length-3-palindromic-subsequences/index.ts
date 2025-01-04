function countPalindromicSubsequence(s: string): number {
    const letterMap = new Map()

    for (let i = 0; i < s.length; i++) {
        if (!letterMap.has(s[i])) {
            letterMap.set(s[i], [i, null])
        } else {
            const indexArr = letterMap.get(s[i])
            indexArr[1] = i
        }
    }

    const result = new Set()

    for (const [key, value] of letterMap) {
        if(value[1] !== null) {
            for(let i = value[0] + 1; i < value[1]; i++) {
                result.add(`${key}${s[i]}${key}`)
            }
        }
    }

    return result.size
};
