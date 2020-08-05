/**
 * 岛屿数量
 * https://leetcode-cn.com/leetbook/read/queue-stack/kbcqv/
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 */

function numIslands(grid: string[][]): number {
  if (!grid.length || !grid[0].length) return 0;

  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  const visited: any = {};
  const dirX = [-1, 0, 1, 0];
  const dirY = [0, 1, 0, -1];

  /** 是水或检查过 */
  function isWaterOrVisited(x: number, y: number): boolean {
    return x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === '0' || visited[`${x}-${y}`];
  }

  /** 检查周围一圈是否是水 */
  function checkRound(t: number, queue: number[]) {
    for (let k = 0; k < 4; k++) {
      const x = Math.floor(t / n) + dirX[k];
      const y = (t % n) + dirY[k];
      if (isWaterOrVisited(x, y)) continue;
      // 没有探索过的陆地, 标记并加入队列
      visited[`${x}-${y}`] = true;
      queue.push(x * n + y);
    }
  }

  grid.forEach((item, i) => {
    item.forEach((subItem, j) => {
      if (subItem === '0' || visited[`${i}-${j}`]) return;
      res += 1;
      const queue = [i * n + j];
      while (queue.length) {
        const t = queue.shift()!;
        checkRound(t, queue);
      }
    });
  });

  return res;
}

export default function() {
  const case0 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ];
  const case1 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ];

  const res0 = numIslands(case0);
  const res1 = numIslands(case1);
  console.info(res0, res1);
}
