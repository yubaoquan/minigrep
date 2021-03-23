/**
 * 二叉树的镜像
 * https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
 */
import TreeNode from '../def/tree_node.ts';

export function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const node = new TreeNode(root.val);
  node.left = mirrorTree(root.right);
  node.right = mirrorTree(root.left);
  return node;
}
