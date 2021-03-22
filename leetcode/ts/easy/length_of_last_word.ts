/**
 * 最后一个单词的长度
 * https://leetcode-cn.com/problems/length-of-last-word/
 */

export function lengthOfLastWord(s: string): number {
  if (!s || !s.trim) return 0;
  const words = s.trim().split(' ');
  return words[words.length - 1].length;
}
