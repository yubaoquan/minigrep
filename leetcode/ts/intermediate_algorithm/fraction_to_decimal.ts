/* eslint-disable no-param-reassign */
// 分数到小数
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xwm8ne/

function fractionToDecimal(numerator: number, denominator: number): string {
  if (!numerator) return '0';
  let fraction = numerator * denominator < 0 ? '-' : '';

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  fraction += Math.floor(numerator / denominator);

  let remainder = numerator % denominator;
  if (!remainder) return fraction;

  fraction += '.';
  const map: Record<string, number> = {};

  while (remainder) {
    if (map[remainder]) {
      const cutPoint = map[remainder];
      fraction = `${fraction.slice(0, cutPoint)}(${fraction.slice(cutPoint)})`;
      break;
    }
    map[remainder] = fraction.length;
    remainder *= 10;
    fraction += Math.floor(remainder / denominator);
    remainder %= denominator;
  }
  return fraction;
}

type Case = [number, number, string];

export default () => {
  ([
    [-50, 8, '-6.25'],
    [4, 333, '0.(012)'],
    [1, 2, '0.5'],
    [2, 1, '2'],
    [2, 3, '0.(6)'],
  ] as Case[]).forEach(([a, b, expect]) => {
    const actual = fractionToDecimal(a, b);
    console.info(expect, actual, actual === expect);
  });
};
