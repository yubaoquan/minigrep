/**
 * 第一个只出现一次的字符
 * https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 */

export function firstUniqChar(s: string): string {
  const memo: Record<string, number> = {};
  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (memo[s[i]] === undefined) memo[s[i]] = i;
  }
  for (let i = 0; i < s.length; i += 1) {
    if (i !== memo[s[i]]) delete memo[s[i]];
    if (i === memo[s[i]]) return s[i];
  }

  return ' ';
}

console.info(firstUniqChar('cc'));
