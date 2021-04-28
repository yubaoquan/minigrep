/** 最大正方形 */
/** https://leetcode-cn.com/explore/interview/card/bytedance/246/dynamic-programming-or-greedy/1028/ */
/** https://leetcode-cn.com/problems/maximal-square/solution/zui-da-zheng-fang-xing-dong-tai-gui-hua-uek62/ */

export function maximalSquare(matrix: string[][]): number {
  const n = matrix.length;
  const m = matrix[0].length;

  const dp: number[][] = Array(n).fill(0).map(() => Array(m).fill(0));
  let max = 0;

  for (let i = 0; i < n; i++) { // 初始化
    if (matrix[i][0] === '1') {
      dp[i][0] = 1;
      max = Math.max(max, 1);
    }
  }
  for (let j = 0; j < m; j++) { // 初始化
    if (matrix[0][j] === '1') {
      dp[0][j] = 1;
      max = Math.max(max, 1);
    }
  }

  // 因为第一行和第一列已经初始化了 所以从 i = 1 和 j = 1 处开始遍历
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        max = Math.max(dp[i][j], max);
      }
    }
  }
  return max * max;
}

const input = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
];

console.info(maximalSquare(input));
