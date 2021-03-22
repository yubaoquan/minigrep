// 二叉搜索树的最近公共祖先
// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
// https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/submissions/

import TreeNode from '../def/tree_node.ts';

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (!root || root.val === p?.val || root.val === q?.val) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  return left && right ? root : left || right || null;
}

const nodes = new Array(9).fill(0).map((val, index) => new TreeNode(index));
nodes[3].left = nodes[5];
nodes[3].right = nodes[1];
nodes[5].left = nodes[6];
nodes[5].right = nodes[2];
nodes[1].left = nodes[0];
nodes[1].right = nodes[8];
nodes[2].left = nodes[7];
nodes[2].right = nodes[4];

const ret = lowestCommonAncestor(nodes[3], nodes[3], nodes[5]);
console.info(ret);
