// 无重复字符的最长子串
// https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1012/
function lengthOfLongestSubstring(s: string): number {
  let ret = 0;
  for (let i = 0; i < s.length; i++) {
    let dupLength = 1;
    const memo: Record<string, boolean> = {};
    memo[s[i]] = true;

    for (let j = i + 1; j < s.length; j++) {
      if (memo[s[j]]) break;
      dupLength++;
      memo[s[j]] = true;
    }
    ret = ret > dupLength ? ret : dupLength;
  }

  return ret;
}

export type Case = [string, number];
([
  ['abcabcbb', 3],
  ['bbbbb', 1],
  ['pwwkew', 3],
] as Case[]).forEach(([str, expect]) => {
  const actual = lengthOfLongestSubstring(str);
  console.info(expect, actual, expect === actual);
});
