/**
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 */

import { arrEq } from '../util/array.ts';

export function findAnagrams(s: string, p: string): number[] {
  const need: Record<string, number> = {};
  const tWindow: Record<string, number> = {};
  const ret: number[] = [];

  for (let i = 0; i < p.length; i += 1) {
    const char = p[i];
    need[char] = need[char] ? need[char] + 1 : 1;
    tWindow[char] = 0;
  }

  const needSize = Object.keys(need).length;

  let left = 0;
  let right = 0;
  let valid = 0;

  while (right < s.length) {
    const c = s[right];
    right++;

    if (need[c]) {
      tWindow[c]++;
      if (need[c] === tWindow[c]) valid++;
    }

    if (valid === needSize && right - left === p.length) ret.push(left);

    while (right - left >= p.length) {
      const d = s[left];
      left++;

      if (need[d]) {
        if (tWindow[d] === need[d]) valid--;
        tWindow[d]--;
      }
    }
  }

  return ret;
}

type Case = [string, string, number[]];

const test = () => {
  (
    [
      ['cbaebabacd', 'abc', [0, 6]],
      ['abab', 'ab', [0, 1, 2]],
    ] as Case[]
  ).forEach(([s, p, expect]) => {
    const actual = findAnagrams(s, p);
    console.info(actual);
    console.info(arrEq(expect, actual));
  });
};

test();
