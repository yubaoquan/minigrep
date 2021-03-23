/**
 * 对称的二叉树
 * https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 * https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/solution/mian-shi-ti-28-dui-cheng-de-er-cha-shu-di-gui-qing/
 */

import TreeNode from '../def/tree_node.ts';

export function isSymmetric(root: TreeNode | null): boolean {
  return root ? recur(root.left, root.right) : true;
}

function recur(l: TreeNode|null, r: TreeNode|null): boolean {
  if (!l && !r) return true;
  if (!l || !r || l.val !== r.val) return false;
  return recur(l.left, r.right) && recur(l.right, r.left);
}
