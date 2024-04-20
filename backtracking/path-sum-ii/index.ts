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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return [];
  const resultArr = [];

  const dfs = (stack: TreeNode[], curNode: TreeNode) => {
    stack.push(curNode);

    const sum = stack.map((el) => el.val).reduce((prev, cur) => prev + cur);
    if (curNode.left === null && curNode.right === null) {
      if (sum === targetSum) {
        resultArr.push([...stack.map((el) => el.val)]);
        return;
      }
      if (sum > targetSum) return;
    }

    if (curNode && curNode.left) {
      dfs(stack, curNode.left);
      stack.pop();
    }
    if (curNode && curNode.right) {
      dfs(stack, curNode.right);
      stack.pop();
    }
  };

  dfs([], root);
  return resultArr;
}
