/**
 * https://leetcode-cn.com/problems/minimum-add-to-make-parentheses-valid/
 */

export function minAddToMakeValid(s: string): number {
  /** 插入次数 */
  let res = 0;

  /** 右括号需求量 */
  let need = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') need++;
    if (s[i] === ')') {
      need--;
      if (need === -1) {
        need = 0;
        res++;
      }
    }
  }

  return res + need;
}
