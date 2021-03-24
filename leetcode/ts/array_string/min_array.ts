/**
 * 旋转数组的最小数字
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 */

export function minArray(numbers: number[]): number {
  if (numbers[0] < numbers[numbers.length - 1]) return numbers[0];
  let min = numbers[numbers.length - 1];
  for (let i = numbers.length - 2; i >= 0; i--) {
    if (numbers[i] <= min) min = numbers[i];
    else return min;
  }
  return min;
}
