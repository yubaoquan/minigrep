/**
 * 左旋转字符串
 * https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 */

export function reverseLeftWords(s: string, n: number): string {
  return s.substring(n) + s.substring(0, n);
}

type Case = [string, number, string];
([
  ['abcdefg', 2, 'cdefgab'],
  ['lrloseumgh', 6, 'umghlrlose'],
] as Case[]).forEach(([s, k, expect]) => {
  const actual = reverseLeftWords(s, k);
  console.info(s, expect === actual);
});
