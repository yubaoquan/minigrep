/**
 * BiNode
 * https://leetcode-cn.com/problems/binode-lcci/
 */
import TreeNode from '../def/tree_node.ts';

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
