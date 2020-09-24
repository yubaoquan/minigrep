// 二叉搜索树的最近公共祖先
// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/

import TreeNode from '../def/tree_node.ts';

function lowestCommonAncestor(root: TreeNode | null, p: number, q: number): TreeNode | null {
  if (!root || root.val === p || root.val === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  if (!left && !right) return null;
  return left || right;
}

export default lowestCommonAncestor;
