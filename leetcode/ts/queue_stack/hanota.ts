/**
 * 汉诺塔问题
 * https://leetcode-cn.com/problems/hanota-lcci/
 * https://leetcode-cn.com/problems/hanota-lcci/comments/241450
 */

export function hanota(a: number[], b: number[], c: number[]): void {
  move(a.length, a, b, c);
}

function move(n: number, a: number[], b: number[], c: number[]) {
  if (n === 1) return c.push(a.pop()!);
  move(n - 1, a, c, b);
  c.push(a.pop()!);
  move(n - 1, b, a, c);
}
