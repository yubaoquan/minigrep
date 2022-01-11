// 同构字符串
// https://leetcode-cn.com/leetbook/read/all-about-lockup-table/f1f86/

function getReplacedStr(s: string): string {
  const memo: Record<string, number> = {};
  let counter = 1;
  let ret = '';

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (!memo[char]) {
      memo[char] = counter;
      counter += 1;
    }
    ret += `,${memo[char]}`;
  }

  return ret;
}

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return getReplacedStr(s) === getReplacedStr(t);
}

export type Case = [string, string, boolean];

(
  [
    ['egg', 'add', true],
    ['foo', 'bar', false],
    ['paper', 'title', true],
  ] as Case[]
).forEach(([a, b, expect]) => {
  const actual = isIsomorphic(a, b);
  console.info(expect === actual);
});
