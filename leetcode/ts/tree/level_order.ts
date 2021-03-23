/**
 * 从上到下打印二叉树 II
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
 */

import TreeNode from '../def/tree_node.ts';

export function levelOrder(root: TreeNode | null): number[][] {
  const ret: number[][] = [];

  function visit(node: TreeNode | null, depth: number): void {
    if (!node) return;
    if (!ret[depth]) ret[depth] = [];
    ret[depth].push(node.val);
    visit(node.left, depth + 1);
    visit(node.right, depth + 1);
  }

  visit(root, 0);
  return ret;
}
