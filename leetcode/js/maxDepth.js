function maxDepth(root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  const leftLen = maxDepth(root.left);
  const rightLen = maxDepth(root.right);
  return 1 + Math.max(leftLen, rightLen);
}

const node1 = { val: 3 };
const node2 = { val: 9 };
const node3 = { val: 20 };
const node4 = { val: 15 };
const node5 = { val: 7 };
node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

console.info(maxDepth(node1));
