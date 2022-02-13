/**
 * 滑动窗口
 * https://leetcode-cn.com/problems/minimum-window-substring/
 */
export function minWindow(s: string, t: string): string {
  const need: Record<string, number> = {};
  const tWindow: Record<string, number> = {};

  t.split('').forEach((char) => {
    need[char] = need[char] ? need[char] + 1 : 1;
    tWindow[char] = 0;
  });

  const needSize = Object.keys(need).length;

  let left = 0;
  let right = 0;
  let valid = 0;

  let start = 0;
  let len = Number.MAX_VALUE;

  while (right < s.length) {
    const c = s[right];
    right++;

    if (need[c]) {
      tWindow[c]++;
      if (tWindow[c] === need[c]) valid++;
    }

    while (valid === needSize) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      const d = s[left];
      left++;

      if (need[d]) {
        if (tWindow[d] === need[d]) valid--;
        tWindow[d]--;
      }
    }
  }

  return len === Number.MAX_VALUE ? '' : s.substring(start, start + len);
}

type Case = [string, string, string];
const test = () => {
  (
    [
      ['ADOBECODEBANC', 'ABC', 'BANC'],
      ['a', 'a', 'a'],
      ['a', 'aa', ''],
    ] as Case[]
  ).forEach(([s, t, expected]) => {
    const actual = minWindow(s, t);
    console.info(actual === expected);
  });
};

test();
