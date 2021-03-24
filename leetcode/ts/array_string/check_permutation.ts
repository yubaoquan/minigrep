/**
 * 判定是否互为字符重排
 * https://leetcode-cn.com/problems/check-permutation-lcci/
 */

export function checkPermutation(s1: string, s2: string): boolean {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  arr1.sort();
  arr2.sort();
  return arr1.join('') === arr2.join('');
}
