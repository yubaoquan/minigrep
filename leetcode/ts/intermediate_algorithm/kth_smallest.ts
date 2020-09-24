// 二叉搜索树中第K小的元素
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvuyv3/

import TreeNode from '../def/tree_node.ts';

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return -1;

  const arr: number[] = [];

  const find = (node: TreeNode) => {
    if (node.left) find(node.left);
    if (arr.length === k) return; // 子树搜索完, 已经找到结果, 应该返回
    arr.push(node.val);
    if (node.right) find(node.right);
    return -1;
  };

  find(root);
  return arr[k - 1];
}

type CaseGenerator = () => [TreeNode, number];

const caseGenerators: CaseGenerator[] = [
  function() {
    const nodes = [3, 1, 4, 2].map(t => new TreeNode(t));
    nodes[0].left = nodes[1];
    nodes[0].right = nodes[2];
    nodes[1].right = nodes[3];
    return [nodes[0], 1];
  },
  function() {
    const nodes = [5, 3, 6, 3, 4, 1].map(t => new TreeNode(t));
    nodes[0].left = nodes[1];
    nodes[0].right = nodes[2];
    nodes[1].left = nodes[3];
    nodes[1].right = nodes[4];
    nodes[3].left = nodes[5];
    return [nodes[0], 3];
  },
];

export default function() {
  caseGenerators.map(gen => gen()).forEach(([node, k]) => {
    const ret = kthSmallest(node, k);
    console.info(ret);
  });
}
