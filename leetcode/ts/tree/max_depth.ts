class Node {
  val: number;

  children: Node[];

  constructor(val?: number, children?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

// N 叉树的最大深度
// https://leetcode-cn.com/leetbook/read/n-ary-tree/x0t4zv/
function maxDepth(root: Node): number {
  if (!root) return 0;
  if (!root.children.length) return 1;
  return root.children
    .map((child) => maxDepth(child) + 1)
    .reduce((max, cur) => (cur > max ? cur : max), 0);
}

// N 叉树的层序遍历
// https://leetcode-cn.com/leetbook/read/n-ary-tree/x0if1e/
function levelOrder(root: Node | null): number[][] {
  const ret: number[][] = [];
  if (!root) return ret;
  let nodes: Node[] = [root];

  while (nodes.length) {
    ret.push(nodes.map((node) => node.val));
    nodes = nodes.reduce((all, node) => all.concat(node.children), [] as Node[]);
  }
  return ret;
}

export { maxDepth, levelOrder };
