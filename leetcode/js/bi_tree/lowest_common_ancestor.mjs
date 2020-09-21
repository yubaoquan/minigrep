/**
 * 二叉树的最近公共祖先
 * https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xopaih/
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function lowestCommonAncestor(root, p, q) {
  const path1 = findPath(root, p);
  const path2 = findPath(root, q);
  const longPath = path1.length >= path2.length ? path1 : path2;
  const shortPath = path1.length < path2.length ? path1 : path2;

  // eslint-disable-next-line curly
  for (let i = shortPath.length - 1; i >= 0; i--) {
    if (longPath.includes(shortPath[i])) return shortPath[i];
  }
}

function findPath(root, node) {
  if (root === node) return [root];
  if (!root || (!root.left && !root.right)) return null;

  const leftPath = findPath(root.left, node);
  const rightPath = findPath(root.right, node);
  const retPath = leftPath || rightPath;

  if (retPath) {
    retPath.unshift(root);
    return retPath;
  }
}

export default function() {
  const nodes = new Array(9).fill(0).map((t, i) => new TreeNode(i));
  [
    [3, 5, 1],
    [5, 6, 2],
    [1, 0, 8],
    [2, 7, 4],
  ].forEach(([n, l, r]) => {
    nodes[n].left = nodes[l];
    nodes[n].right = nodes[r];
  });

  const ret1 = lowestCommonAncestor(nodes[3], nodes[5], nodes[1]);
  const ret2 = lowestCommonAncestor(nodes[3], nodes[5], nodes[4]);
  console.info(ret1.val, ret2.val);
}
