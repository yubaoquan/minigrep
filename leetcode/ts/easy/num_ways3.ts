/**
 * 三步问题
 * https://leetcode-cn.com/problems/three-steps-problem-lcci/
 */

export function waysToStep(n: number): number {
  if (n <= 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;
  let a = 1;
  let b = 2;
  let c = 4;
  let d = a + b + c;
  const max = 1000000007;

  for (let i = 4; i < n; i += 1) {
    a = b;
    b = c;
    c = d;
    d = a + b + c;
    d = d > max ? d % max : d;
  }
  return d;
}

console.info(waysToStep(5));
