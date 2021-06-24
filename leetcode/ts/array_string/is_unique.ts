/**
 * 判定字符是否唯一
 * https://leetcode-cn.com/problems/is-unique-lcci/
 */

export function isUnique(astr: string): boolean {
  const memo: Record<string, boolean> = {};
  for (let i = 0; i < astr.length; i += 1) {
    if (memo[astr[i]]) return false;
    memo[astr[i]] = true;
  }
  return true;
}
