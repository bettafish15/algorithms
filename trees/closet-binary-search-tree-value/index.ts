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


function closestValue(root: TreeNode | null, target: number): number {
  if(!root) return - 1

  const dfs = (root: TreeNode) => {
      const diffs: [number, number][] = [[root.val, Math.abs(target - root.val)]]
      if(root.left) diffs.push(dfs(root.left)!)
      if(root.right) diffs.push(dfs(root.right)!)

      return diffs.sort((a, b) => {
          if(b[1] === a[1]) return b[0] - a[0]
          return b[1] - a[1]
      }).pop()
  }

  return dfs(root)![0]
};
