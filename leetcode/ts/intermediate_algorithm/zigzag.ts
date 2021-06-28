import TreeNode from '../def/tree_node.ts';

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const ret: number[][] = [];
  let depth = 0;
  let q: TreeNode[] = [root];
  let curArr: TreeNode[] = [];

  while (q.length || curArr.length) {
    if (!q.length) {
      depth += 1;
      q = curArr;
      curArr = [];
    }

    const node = q.shift()!;
    ret[depth] = ret[depth] || [];
    const arr = ret[depth];
    arr.push(node.val);

    if (!node.left && !node.right) continue;

    if (depth % 2 === 0) { // 从左向右
      if (node.left) curArr.unshift(node.left);
      if (node.right) curArr.unshift(node.right);
    } else { // 从右向左
      if (node.right) curArr.unshift(node.right);
      if (node.left) curArr.unshift(node.left);
    }
  }

  return ret;
}

const getTrees = [
  () => {
    const nodes = [3, 9, 20, 15, 7].map((t) => new TreeNode(t));
    nodes[0].left = nodes[1];
    nodes[0].right = nodes[2];
    nodes[2].left = nodes[3];
    nodes[2].right = nodes[4];

    return nodes[0];
  },
  () => {
    const nodes = [1, 2, 3, 4, 5].map((t) => new TreeNode(t));
    const root = nodes[0];
    root.left = nodes[1];
    root.right = nodes[2];
    root.left.left = nodes[3];
    root.right.right = nodes[4];
    return root;
  },
  () => {
    const nodes = [0, 2, 4, 1, 3, -1, 5, 1, 6, 8].map((t) => new TreeNode(t));
    nodes[0].left = nodes[1];
    nodes[0].right = nodes[2];
    nodes[1].left = nodes[3];
    nodes[2].left = nodes[4];
    nodes[2].right = nodes[5];
    nodes[3].left = nodes[6];
    nodes[3].right = nodes[7];
    nodes[4].right = nodes[8];
    nodes[5].right = nodes[9];

    return nodes[0];
  },

];

export default () => {
  getTrees.map((getTree) => getTree()).forEach((tree) => {
    const ret = zigzagLevelOrder(tree);
    console.info(ret);
  });
};
