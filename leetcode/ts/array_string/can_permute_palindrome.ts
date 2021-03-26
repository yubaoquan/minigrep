/**
 * 回文排列
 * https://leetcode-cn.com/problems/palindrome-permutation-lcci/
 */

function canPermutePalindrome(s: string): boolean {
  const memo: Record<string, boolean> = {};
  for (let i = 0; i < s.length; i++) memo[s[i]] = !memo[s[i]];
  return Object.values(memo).filter(value => value).length < 2;
}

console.info(canPermutePalindrome('aab'));
console.info(canPermutePalindrome('abc'));
console.info(canPermutePalindrome('aba'));
