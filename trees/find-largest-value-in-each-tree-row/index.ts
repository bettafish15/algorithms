class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function largestValues(root: TreeNode | null): number[] {
  if(!root) return []

  const queue = [root]
  const arrayOfLargestValueInEachRow: number[] = []

  while(queue.length > 0) {
      let largestValue: number = -Infinity
      const numberOfNodeInLevel = queue.length
      for(let i = 0; i < numberOfNodeInLevel; i++) {
          const node = queue.shift()
          largestValue = Math.max(largestValue, node!.val)
          if(node?.left) queue.push(node.left)
          if(node?.right) queue.push(node.right)
      }
      arrayOfLargestValueInEachRow.push(largestValue)
      largestValue = 0
  }

  return arrayOfLargestValueInEachRow
};
