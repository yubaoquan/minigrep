/**
 * 速算机器人
 https://leetcode-cn.com/problems/nGK0Fy/
*/

export function calculate(s: string): number {
  let x = 1;
  let y = 0;
  s.split('').forEach(char => {
    if (char === 'A') x = (2 * x) + y;
    if (char === 'B') y = (2 * y) + x;
  });

  return x + y;
}
