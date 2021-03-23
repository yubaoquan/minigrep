/**
 * 二叉搜索树的第k大节点
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 */

import TreeNode from '../def/tree_node.ts';

export function kthLargest(root: TreeNode | null, k: number): number {
  const arr: number[] = [];

  function visit(node: TreeNode|null) {
    if (!node) return;
    visit(node.right);
    arr.push(node.val);
    if (arr.length >= k) return;
    visit(node.left);
  }

  visit(root);

  return arr[k - 1];
}
