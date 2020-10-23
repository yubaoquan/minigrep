// 翻转字符串里的单词
// https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1011/
function reverseWords(s: string): string {
  return s
    .replace(/(^\s+)|(\s+$)/g, '')
    .replace(/\s+/g, ' ')
    .split(' ')
    .reverse()
    .join(' ');
}

export type Case = [string, string];

([
  ['the sky is blue', 'blue is sky the'],
  ['  hello world!  ', 'world! hello'],
  ['a good   example', 'example good a'],
  ['  Bob    Loves  Alice   ', 'Alice Loves Bob'],
  ['Alice does not even like bob', 'bob like even not does Alice'],
] as Case[]).forEach(([str, expect]) => {
  const actual = reverseWords(str);
  console.info(expect, actual, expect === actual);
});
