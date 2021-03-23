/**
 * 稀疏数组搜索
 * https://leetcode-cn.com/problems/sparse-array-search-lcci/
 */

export function findString(words: string[], s: string): number {
  for (let i = 0; i < words.length; i++) {
    if (s === words[i]) return i;
    if (s < words[i]) return -1;
  }
  return -1;
}
