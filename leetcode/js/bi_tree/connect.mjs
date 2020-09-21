/**
 * 填充每个节点的下一个右侧节点指针
 * https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoo0ts/
 *
 */

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

function connect(root) {
  if (!root) return root;
  const q = [];
  q.push(root);
  let step = 0;

  while (q.length) {
    const len = 2 ** step;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      if (i < len - 1) node.next = q[0];
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    step += 1;
  }
  return root;
}

export default function() {
  const nodes = new Array(8).fill(0).map((t, i) => new Node(i));
  nodes[1].left = nodes[2];
  nodes[1].right = nodes[3];
  nodes[2].left = nodes[4];
  nodes[2].right = nodes[5];
  nodes[3].left = nodes[6];
  nodes[3].right = nodes[7];

  const ret = connect(nodes[1]);
  console.info(ret);
}
