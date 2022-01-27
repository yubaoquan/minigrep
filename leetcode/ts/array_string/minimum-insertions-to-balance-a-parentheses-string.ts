/**
 * https://leetcode-cn.com/problems/minimum-insertions-to-balance-a-parentheses-string/
 */
export function minInsertions(s: string): number {
  /** 插入次数 */
  let res = 0;

  /** 右括号需求量 */
  let need = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      need += 2;

      if (need % 2 === 1) {
        res++;
        need--;
      }
    }

    if (s[i] === ')') {
      need--;

      if (need === -1) {
        res++;
        need = 1;
      }
    }
  }

  return res + need;
}
