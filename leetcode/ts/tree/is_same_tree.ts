/**
 * 相同的树
 * https://leetcode-cn.com/problems/same-tree/
 */
import TreeNode from '../def/tree_node.ts';

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if ((p && !q) || (q && !p)) return false;
  if (!p || !q) return true; // to pass compile
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

/**
 * 平衡二叉树
 * https://leetcode-cn.com/problems/balanced-binary-tree/
 * https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/
 */

function getTreeHeight(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(getTreeHeight(root.left), getTreeHeight(root.right));
}

export function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  const leftHeight = getTreeHeight(root.left);
  const rightHeight = getTreeHeight(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
}

/**
 * 二叉树的最小深度
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */

export function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const leftMinDepth = minDepth(root.left);
  const rightMinDepth = minDepth(root.right);
  if (leftMinDepth && rightMinDepth) return 1 + Math.min(leftMinDepth, rightMinDepth);
  if (!leftMinDepth && rightMinDepth) return 1 + rightMinDepth;
  if (leftMinDepth && !rightMinDepth) return 1 + leftMinDepth;
  return 1;
}

const treeNodes: TreeNode[] = [
  -9,
  -3,
  2,
  4,
  4,
  0,
  -6,
  -5,
].map((v) => new TreeNode(v));

const head = treeNodes[0];
head.left = treeNodes[1];
head.right = treeNodes[2];
treeNodes[1].right = treeNodes[3];
treeNodes[3].left = treeNodes[6];
treeNodes[2].left = treeNodes[4];
treeNodes[2].right = treeNodes[5];
treeNodes[4].left = treeNodes[7];

console.info(minDepth(head));
