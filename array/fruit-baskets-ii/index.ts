function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    let pointer = 0
    let basketPointer = 0
    let packed = 0
    while (pointer < fruits.length) {
        if (baskets[basketPointer] >= fruits[pointer]) {
            baskets[basketPointer] = 0
            basketPointer = 0
            packed += 1;
            pointer += 1
        } else {
            basketPointer += 1
        }

        if (basketPointer >= baskets.length) {
            basketPointer = 0
            pointer += 1
        }
    }

    return fruits.length - packed

};
