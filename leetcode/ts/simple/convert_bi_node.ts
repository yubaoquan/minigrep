/**
 * BiNode
 * https://leetcode-cn.com/problems/binode-lcci/
 */
class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function convertBiNode(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  const leftHead = convertBiNode(root.left);
  let leftCursor = leftHead;
  if (leftCursor) {
    while (leftCursor.right) leftCursor = leftCursor.right;
    leftCursor.right = root;
  }
  root.left = null;
  root.right = convertBiNode(root.right);

  return leftHead || root;
}
