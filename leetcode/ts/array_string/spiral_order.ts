/**
 * 顺时针打印矩阵
 * https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
 */

export function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length) return [];
  let l = 0;
  let r = matrix[0].length - 1;
  let t = 0;
  let b = matrix.length - 1;
  const ret: number[] = [];

  const shouldBreak = () => t > b || l > r || t > b || l > r;

  while (!shouldBreak()) {
    for (let i = l; i <= r; i += 1) ret.push(matrix[t][i]);
    t += 1;
    if (t > b) break;

    for (let i = t; i <= b; i += 1) ret.push(matrix[i][r]);
    r -= 1;
    if (l > r) break;

    for (let i = r; i >= l; i -= 1) ret.push(matrix[b][i]);
    b -= 1;
    if (t > b) break;

    for (let i = b; i >= t; i -= 1) ret.push(matrix[i][l]);
    l += 1;
    if (l > r) break;
  }
  return ret;
}
