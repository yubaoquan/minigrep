// 阶乘后的零
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xwehi5/
// https://leetcode-cn.com/problems/factorial-trailing-zeroes/solution/xiang-xi-tong-su-de-si-lu-fen-xi-by-windliang-3/

function trailingZeroes(input: number): number {
  let n = input;
  let count = 0;
  while (n > 0) {
    const devideBy5 = Math.floor(n / 5);
    count += devideBy5;
    n = devideBy5;
  }
  return count;
}

type Case = [number, number];

export default function foo() {
  ([
    [3, 0],
    [5, 1],
  ] as Case[]).forEach(([n, expect]) => {
    const ret = trailingZeroes(n);
    console.info(expect, ret, expect === ret);
  });
}
