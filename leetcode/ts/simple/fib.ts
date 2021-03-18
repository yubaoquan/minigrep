/**
 * 斐波那契数列
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 */

function fib(n: number): number {
  if (!n) return 0;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  let c = a + b;
  const max = 1000000007;

  for (let i = 3; i <= n; i++) {
    a = b;
    b = c;
    c = a + b;
    c = c > max ? c % max : c;
  }

  return c;
}

type Case = [number, number];

([
  [5, 5],
  [2, 1],
  [45, 134903163],
  [81, 107920472],
] as Case[]).forEach(([n, expect]) => {
  const actual = fib(n);
  console.info(expect, actual, expect === actual);
});
