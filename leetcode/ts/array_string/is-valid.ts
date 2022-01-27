/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 */

export function isValid(s: string): boolean {
  const left: string[] = [];
  const leftTypes = ['(', '[', '{'];
  const leftOf: any = {
    ']': '[',
    '}': '{',
    ')': '(',
  };

  for (let i = 0; i < s.length; i += 1) {
    if (leftTypes.includes(s[i])) left.unshift(s[i]);
    else if (left.length && leftOf[s[i]] === left[0]) left.shift();
    else return false;
  }

  return left.length === 0;
}
