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


function minimumOperations(root: TreeNode | null): number {
  if(!root) return 0

  const queue = [root]
  let swap = 0

  while(queue.length > 0) {
      const levelSize = queue.length
      const levelValues: number[] = []

      for(let i = 0; i < levelSize; i++) {
          const node = queue.shift()
          levelValues.push(node!.val)

          if(node!.left) queue.push(node!.left)
          if(node!.right) queue.push(node!.right)
      }

      swap += calculateNumberOfSwaps(levelValues)
  }

  return swap
};

function calculateNumberOfSwaps(arr: number[]) {
  const sortedArr = [...arr].map((el, index) => [el, index]).sort((a, b) => a[0] - b[0])
  const visited = Array.from({ length: arr.length }).fill(false)

  let swap = 0

  for(let i = 0; i < arr.length; i++) {
      if(sortedArr[i][1] === i || visited[i]) continue

      let cycleSize = 0
      let j = i
      while(!visited[j]) {
          visited[j] = true
          j = sortedArr[j][1]
          cycleSize += 1
      }

      if(cycleSize > 0) swap += (cycleSize - 1)
  }

  return swap
}
