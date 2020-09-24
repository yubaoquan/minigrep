// 打家劫舍3
// https://leetcode-cn.com/problems/house-robber-iii/

import TreeNode from '../def/tree_node.ts';

function rob(root: TreeNode | null): number {
  const [a, b] = dp(root);
  return Math.max(a, b);
}

function dp(root: TreeNode | null): number[] {
  if (!root) return [0, 0];
  const left = dp(root.left);
  const right = dp(root.right);

  const notRobVal = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  const robVal = root.val + left[0] + right[0];

  return [notRobVal, robVal];
}

type Case = [TreeNode, number];

export default function() {
  const nodes1 = [3, 2, 3, 3, 1].map(t => new TreeNode(t));
  nodes1[0].left = nodes1[1];
  nodes1[0].right = nodes1[2];
  nodes1[1].right = nodes1[3];
  nodes1[2].right = nodes1[4];

  const nodes2 = [3, 4, 5, 1, 3, 1].map(t => new TreeNode(t));
  nodes2[0].left = nodes2[1];
  nodes2[0].right = nodes2[2];
  nodes2[1].left = nodes2[3];
  nodes2[1].right = nodes2[4];
  nodes2[2].right = nodes2[5];

  ([
    [nodes1[0], 7],
    [nodes2[0], 9],
  ] as Case[]).forEach(([node, expect]) => {
    const ret = rob(node);
    console.info(ret, expect, ret === expect);
  });
}
