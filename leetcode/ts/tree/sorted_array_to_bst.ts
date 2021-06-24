/**
 * 最小高度树
 * https://leetcode-cn.com/problems/minimum-height-tree-lcci/
 */

import TreeNode from '../def/tree_node.ts';

function inner(nums: number[], start: number, end: number): TreeNode | null {
  if (!nums.length) return null;
  const middle = Math.floor((end + start) / 2);
  if (middle >= nums.length) return null;
  const node = new TreeNode(nums[middle]);
  if (start < middle) node.left = inner(nums, start, middle - 1);
  if (middle < end) node.right = inner(nums, middle + 1, end);
  return node;
}

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  return inner(nums, 0, nums.length);
}

const node = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.info(node);
