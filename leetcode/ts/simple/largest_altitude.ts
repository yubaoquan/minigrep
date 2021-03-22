/**
 * 找到最高海拔
 * https://leetcode-cn.com/problems/find-the-highest-altitude/
 */

export function largestAltitude(gain: number[]): number {
  let current = 0;
  let max = 0;

  gain.forEach(t => {
    current += t;
    if (current > max) max = current;
  });
  return max;
}
