function totalFruit(fruits: number[]): number {
    const fruitHash = new Map()

    let left = 0
    let right = 1

    fruitHash.set(fruits[left], 1)
    let count = 1
    let res = 1

    while (right < fruits.length) {
        // console.log('right pointer: ', right)
        fruitHash.set(fruits[right], (fruitHash.get(fruits[right]) || 0) + 1)
        // console.log('fruitHash: ', fruitHash)
        count += 1
        // console.log('count: ', count)

        if (fruitHash.size > 2) {
            while (fruitHash.size > 2) {
                // console.log('=======')
                // console.log('size > 2')
                fruitHash.set(fruits[left], fruitHash.get(fruits[left]) - 1)
                if (fruitHash.get(fruits[left]) === 0) fruitHash.delete(fruits[left])
                count -= 1
                left += 1
                // console.log('fruitHash: ', fruitHash)
                // console.log('count: ', count)
                // console.log('=======')
            }
        }

        res = Math.max(res, count)
        right++;
    }

    return res
};
