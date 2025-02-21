/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class FindElements {
    hashTable: Set<number>
    constructor(root: TreeNode | null) {
        this.hashTable = new Set<number>([0])
        root.val = 0
        const stack = [root]
        while(stack.length !== 0) {
            const element = stack.pop()
            const left = element.left
            const right = element.right

            if(left) {
                left.val = element.val*2 + 1
                stack.push(left)
                this.hashTable.add(left.val)
            }

            if(right) {
                right.val = element.val*2 + 2
                stack.push(right)
                this.hashTable.add(right.val)
            }
        }
    }

    find(target: number): boolean {
        return this.hashTable.has(target)
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */