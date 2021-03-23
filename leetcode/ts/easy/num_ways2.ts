/**
 * 青蛙跳台阶问题
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/solution/mian-shi-ti-10-ii-qing-wa-tiao-tai-jie-wen-ti-dong/
 */

function numWays(n: number): number {
  if (n <= 1) return 1;
  if (n === 2) return 2;
  let a = 1;
  let b = 2;
  let c = a + b;
  const max = 1000000007;

  for (let i = 3; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
    c = c > max ? c % max : c;
  }
  return c;
}

type Case = [number, number];

([
  [78, 923369890],
  [2, 2],
  [7, 21],
  [0, 1],

] as Case[]).forEach(([n, expect]) => {
  const actual = numWays(n);
  console.info(n, actual, actual === expect);
});
