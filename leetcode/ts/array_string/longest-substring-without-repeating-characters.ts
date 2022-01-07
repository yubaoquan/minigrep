/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */
export function lengthOfLongestSubstring(s: string): number {
  const tWindow: Record<string, number> = {};

  for (let i = 0; i < s.length; i += 1) {
    tWindow[s[i]] = 0;
  }

  let maxLen = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const c = s[right];
    right++;
    tWindow[c]++;

    while (tWindow[c] > 1) {
      const d = s[left];
      left++;
      tWindow[d]--;
    }

    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
}

type Case = [string, number];

const test = () => {
  ([
    ['abcabcbb', 3],
    ['bbbbb', 1],
    ['pwwkew', 3],
    ['', 0],
  ] as Case[]).forEach(([s, expect]) => {
    const actual = lengthOfLongestSubstring(s);
    console.info(actual === expect);
  });
};

test();
