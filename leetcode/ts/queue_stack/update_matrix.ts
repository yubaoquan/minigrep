/**
 * 矩阵
 * https://leetcode-cn.com/leetbook/read/queue-stack/g7pyt/
 *
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。

示例 1:
输入:

0 0 0
0 1 0
0 0 0
输出:

0 0 0
0 1 0
0 0 0
示例 2:
输入:

0 0 0
0 1 0
1 1 1
输出:

0 0 0
0 1 0
1 2 1
注意:

给定矩阵的元素个数不超过 10000。
给定矩阵中至少有一个元素是 0。
矩阵中的元素只在四个方向上相邻: 上、下、左、右。

*/

function updateMatrix(matrix: number[][]): number[][] {
  const visited: Record<string, boolean> = {};
  const q: number[][] = [];

  const ret: number[][] = matrix.map((arr, i) => arr.map((item, j) => {
    if (item === 0) {
      visited[`${i}-${j}`] = true;
      q.push([i, j]);
      return 0;
    }
    return -1;
  }));

  function check(x: number, y: number, n: number) {
    if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return;
    if (visited[`${x}-${y}`]) return;
    ret[x][y] = n + 1;
    visited[`${x}-${y}`] = true;
    q.push([x, y]);
  }

  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i += 1) {
      const [x, y] = q.shift()!;
      check(x - 1, y, ret[x][y]);
      check(x + 1, y, ret[x][y]);
      check(x, y - 1, ret[x][y]);
      check(x, y + 1, ret[x][y]);
    }
  }

  return ret;
}

export default () => {
  [
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
  ].forEach((matrix) => {
    const ret = updateMatrix(matrix);
    console.info(ret);
  });
};
