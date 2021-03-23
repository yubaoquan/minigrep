/**
 * URL化
 * https://leetcode-cn.com/problems/string-to-url-lcci/
 */

export function replaceSpaces(s: string, length: number): string {
  return s.substring(0, length).replace(/ /g, '%20');
}
