function Node(val, children) {
  this.val = val;
  this.children = children;
}

// N 叉树的前序遍历
// https://leetcode-cn.com/leetbook/read/n-ary-tree/x0locc/
function preorder(root) {
  if (!root) return [];
  const ret = [];

  function visit(node) {
    ret.push(node.val);
    node.children.forEach(child => visit(child));
  }

  visit(root);
  return ret;
}

// N 叉树的后序遍历
// https://leetcode-cn.com/leetbook/read/n-ary-tree/x0i5yi/
function postorder(root) {
  if (!root) return [];
  const ret = [];

  function visit(node) {
    node.children.forEach(child => visit(child));
    ret.push(node.val);
  }

  visit(root);
  return ret;
}

export { preorder, postorder };
