/**
 * 翻转单词顺序
 * https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 */

export function reverseWords(s: string): string {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
}

type Case = [string, string];

(
  [
    ['the sky is blue', 'blue is sky the'],
    ['  hello world!  ', 'world! hello'],
    ['a good   example', 'example good a'],
  ] as Case[]
).forEach(([input, expect]) => {
  const actual = reverseWords(input);
  console.info(input, expect === actual);
});
