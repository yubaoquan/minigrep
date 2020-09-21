/**
 * 二叉树的序列化与反序列化
 * https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xomr73/
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function serialize(root) {
  function ser(node, arr = []) {
    if (!node) {
      arr.push('x');
      return arr;
    }
    arr.push(node.val);
    ser(node.left, arr);
    ser(node.right, arr);
    return arr;
  }

  return ser(root).join(',');
}

function deserialize(str) {
  if (!str) return null;
  const array = str.split(',').map(char => (char === 'x' ? null : +char));

  function de(arr) {
    const val = arr.shift();
    if (val == null) return null;
    const node = new TreeNode(val);
    node.left = de(arr);
    node.right = de(arr);
    return node;
  }

  return de(array);
}

export default function() {
  const nodes = new Array(8).fill(0).map((t, i) => new TreeNode(i));
  nodes[1].left = nodes[2];
  nodes[1].right = nodes[3];
  nodes[2].left = nodes[4];
  nodes[2].right = nodes[5];
  nodes[3].right = nodes[7];

  const str = serialize(nodes[1]);
  const de = deserialize(str);
  const str2 = serialize(de);
  console.info(str === str2);
}
