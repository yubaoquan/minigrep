/**
 * 丑数
 * https://leetcode-cn.com/problems/ugly-number/
 */

function isUgly(input: number): boolean {
  let n = input;
  if (!n) return false;
  if (n === 1) return true;
  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;
  return n === 1;
}

type Case = [number, boolean];
([
  [6, true],
  [8, true],
  [14, false],
] as Case[]).forEach(([n, expect]) => {
  const actual = isUgly(n);
  console.info(n, expect, actual, expect === actual);
});
