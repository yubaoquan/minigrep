/** 三角形最小路径和 */
/** https://leetcode-cn.com/explore/interview/card/bytedance/246/dynamic-programming-or-greedy/1030/ */
/** https://leetcode-cn.com/problems/triangle/solution/di-gui-ji-yi-hua-dp-bi-xu-miao-dong-by-sweetiee/ */

function minimumTotal(triangle: number[][]): number {
  const n = triangle.length;
  const dp = Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = 0; j <= i; j += 1) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
}

// const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
const triangle = [[-10]];
console.info(minimumTotal(triangle));
