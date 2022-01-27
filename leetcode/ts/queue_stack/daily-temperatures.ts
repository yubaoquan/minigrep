/**
 * https://leetcode-cn.com/problems/daily-temperatures/
 */

export function dailyTemperatures(temperatures: number[]): number[] {
  const res: number[] = [];
  const s: number[] = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (s.length && temperatures[s[0]] <= temperatures[i]) s.shift();
    res[i] = s.length ? s[0] - i : 0;
    s.unshift(i);
  }

  return res;
}
