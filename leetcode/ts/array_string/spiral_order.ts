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
  while (true) {
    for (let i = l; i <= r; i++) ret.push(matrix[t][i]);
    t++;
    if (t > b) break;

    for (let i = t; i <= b; i++) ret.push(matrix[i][r]);
    r--;
    if (l > r) break;

    for (let i = r; i >= l; i--) ret.push(matrix[b][i]);
    b--;
    if (t > b) break;

    for (let i = b; i >= t; i--) ret.push(matrix[i][l]);
    l++;
    if (l > r) break;
  }
  return ret;
}
