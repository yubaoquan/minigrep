/**
 * https://leetcode-cn.com/problems/permutation-in-string/
 */
export function checkInclusion(s1: string, s2: string): boolean {
  const need: Record<string, number> = {};
  const tWindow: Record<string, number> = {};

  for (let i = 0; i < s1.length; i += 1) {
    const char = s1[i];
    need[char] = need[char] ? need[char] + 1 : 1;
    tWindow[char] = 0;
  }

  const needSize = Object.keys(need).length;

  let left = 0;
  let right = 0;
  let valid = 0;

  while (right < s2.length) {
    const c = s2[right];

    right++;

    if (need[c]) {
      tWindow[c]++;
      if (tWindow[c] === need[c]) valid++;
    }

    while (right - left >= s1.length) {
      if (valid === needSize) return true;

      const d = s2[left];

      left++;

      if (need[d]) {
        if (tWindow[d] === need[d]) valid--;
        tWindow[d]--;
      }
    }
  }

  return false;
}

type Case = [string, string, boolean];
const test = () => {
  ([
    ['ab', 'eidbaooo', true],
    ['ab', 'eidboaoo', false],
  ] as Case[]).forEach(([s1, s2, expected]) => {
    const actual = checkInclusion(s1, s2);
    console.info(actual === expected);
  });
};

test();
