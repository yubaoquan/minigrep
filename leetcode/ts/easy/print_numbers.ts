/**
 * 打印从1到最大的n位数
 * https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 */

export function printNumbers(n: number): number[] {
  const maxNumber = parseInt(new Array(n).fill('9').join(''), 10);
  return new Array(maxNumber).fill(0).map((t, i) => i + 1);
}
