function divide(dividend: number, divisor: number): number {
  if (!dividend) return 0;
  if (divisor === 1) return dividend;

  const min = -(2 ** 31);
  const max = (2 ** 31) - 1;

  if (divisor === -1) return dividend === min ? max : -dividend;

  // 除数翻倍, 应对被除数特别大, 除数特别小的问题
  // https://leetcode-cn.com/problems/divide-two-integers/solution/po-su-de-xiang-fa-mei-you-wei-yun-suan-mei-you-yi-/#comment
  const div = (aa: number, bb: number): number => {
    if (aa < bb) return 0;
    let count = 1;
    let tb = bb;

    while (tb + tb <= aa) {
      count += count;
      tb += tb;
    }

    return count + div(aa - tb, bb);
  };

  const a = dividend < 0 ? -dividend : dividend;
  const b = divisor < 0 ? -divisor : divisor;
  const ret = div(a, b);

  return (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? ret : -ret;
}

type Case = [number, number, number];

export default function () {
  ([
    [-2147483648, -1, 2147483647],
    [10, 3, 3],
    [7, -3, -2],
  ] as Case[]).forEach(([dividend, divisor, expect]) => {
    const ret = divide(dividend, divisor);
    console.info(expect, ret, expect === ret);
  });
}
