/**
 * 字符串轮转
 * https://leetcode-cn.com/problems/string-rotation-lcci/
 */

export function isFlipedString(s1: string, s2: string): boolean {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;
  for (let i = 1; i < s1.length; i++) {
    const str = s1.substr(i) + s1.substr(0, i);
    if (str === s2) return true;
  }
  return false;
}

export function isFlipedString2(s1: string, s2: string): boolean {
  return s1.length === s2.length && `${s1}${s1}`.includes(s2);
}
