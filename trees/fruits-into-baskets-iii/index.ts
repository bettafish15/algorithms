function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    const basketCount = baskets.length;
    if (basketCount === 0) {
        return fruits.length;
    }

    // The segment tree efficiently finds the max capacity in a range of baskets.
    const capacityTree = new CapacitySegmentTree(baskets);
    let unplacedFruitCount = 0;

    for (const fruitSize of fruits) {
        let low = 0;
        let high = basketCount - 1;
        let bestBasketIndex = -1;

        // Binary search to find the leftmost index 'i' such that there is at least
        // one basket in the range [0...i] that can hold the current fruit.
        while (low <= high) {
            const midIndex = Math.floor((low + high) / 2);
            // Query for the max capacity in the range of baskets from index 0 to midIndex.
            if (capacityTree.queryMaxCapacity(0, midIndex) >= fruitSize) {
                bestBasketIndex = midIndex; // Found a potential range, try to find an earlier one.
                high = midIndex - 1;
            } else {
                low = midIndex + 1; // Need to look in a larger range to the right.
            }
        }

        // After finding the earliest possible index, check if that specific basket can hold the fruit.
        // NOTE: This logic assumes we should check the basket at `bestBasketIndex`. This might not be
        // the optimal strategy if the baskets are not sorted, but we preserve the original logic.
        if (bestBasketIndex !== -1 && capacityTree.sourceCapacities[bestBasketIndex] >= fruitSize) {
            // The fruit is placed. "Remove" the basket by setting its capacity to a very low number.
            const USED_BASKET_VALUE = Number.MIN_SAFE_INTEGER;
            capacityTree.updateCapacity(bestBasketIndex, USED_BASKET_VALUE);
        } else {
            // No suitable basket was found and used for this fruit.
            unplacedFruitCount++;
        }
    }

    return unplacedFruitCount;
};

/**
 * A Segment Tree data structure tailored for querying maximum capacity
 * in a range and updating the capacity of a specific basket.
 */
class CapacitySegmentTree {
    // Stores the nodes of the segment tree. Each node holds the max capacity of a range.
    private nodes: number[];
    // A copy of the original basket capacities array.
    public sourceCapacities: number[];
    // The number of elements in the original array.
    private size: number;

    constructor(capacities: number[]) {
        this.sourceCapacities = capacities;
        this.size = capacities.length;
        this.nodes = new Array(4 * this.size).fill(0);
        this.build(1, 0, this.size - 1);
    }

    /**
     * Recursively builds the segment tree from the initial capacities.
     * @param nodeIndex The index of the current node in the `nodes` array.
     * @param segmentStart The starting index of the segment this node represents.
     * @param segmentEnd The ending index of the segment this node represents.
     */
    private build(nodeIndex: number, segmentStart: number, segmentEnd: number): void {
        if (segmentStart === segmentEnd) {
            this.nodes[nodeIndex] = this.sourceCapacities[segmentStart];
            return;
        }
        const mid = Math.floor((segmentStart + segmentEnd) / 2);
        const leftChildIndex = nodeIndex * 2;
        const rightChildIndex = nodeIndex * 2 + 1;

        this.build(leftChildIndex, segmentStart, mid);
        this.build(rightChildIndex, mid + 1, segmentEnd);
        this.nodes[nodeIndex] = Math.max(
            this.nodes[leftChildIndex],
            this.nodes[rightChildIndex],
        );
    }

    /**
     * Queries for the maximum capacity within a given range [queryStart, queryEnd].
     * This is a wrapper for the recursive query function.
     */
    public queryMaxCapacity(queryStart: number, queryEnd: number): number {
        return this.recursiveQuery(1, 0, this.size - 1, queryStart, queryEnd);
    }

    private recursiveQuery(
        nodeIndex: number,
        segmentStart: number,
        segmentEnd: number,
        queryStart: number,
        queryEnd: number,
    ): number {
        if (queryStart > segmentEnd || queryEnd < segmentStart) {
            return Number.MIN_SAFE_INTEGER; // No overlap
        }
        if (queryStart <= segmentStart && segmentEnd <= queryEnd) {
            return this.nodes[nodeIndex]; // Complete overlap
        }
        const mid = Math.floor((segmentStart + segmentEnd) / 2);
        const leftChildIndex = nodeIndex * 2;
        const rightChildIndex = nodeIndex * 2 + 1;

        const leftMax = this.recursiveQuery(leftChildIndex, segmentStart, mid, queryStart, queryEnd);
        const rightMax = this.recursiveQuery(rightChildIndex, mid + 1, segmentEnd, queryStart, queryEnd);
        return Math.max(leftMax, rightMax);
    }

    /**
     * Updates the capacity of a basket at a specific position and propagates the change up the tree.
     * This is a wrapper for the recursive update function.
     */
    public updateCapacity(updateIndex: number, newValue: number): void {
        this.recursiveUpdate(1, 0, this.size - 1, updateIndex, newValue);
    }

    private recursiveUpdate(
        nodeIndex: number,
        segmentStart: number,
        segmentEnd: number,
        updateIndex: number,
        newValue: number,
    ): void {
        if (segmentStart === segmentEnd) {
            this.nodes[nodeIndex] = newValue;
            return;
        }
        const mid = Math.floor((segmentStart + segmentEnd) / 2);
        const leftChildIndex = nodeIndex * 2;
        const rightChildIndex = nodeIndex * 2 + 1;

        if (updateIndex <= mid) {
            this.recursiveUpdate(leftChildIndex, segmentStart, mid, updateIndex, newValue);
        } else {
            this.recursiveUpdate(rightChildIndex, mid + 1, segmentEnd, updateIndex, newValue);
        }
        this.nodes[nodeIndex] = Math.max(
            this.nodes[leftChildIndex],
            this.nodes[rightChildIndex],
        );
    }
}
