/**
 * 阶乘尾数
 * https://leetcode-cn.com/problems/factorial-zeros-lcci/
 * https://leetcode-cn.com/problems/factorial-zeros-lcci/solution/zhai-zi-ping-lun-qu-suan-tou-wang-bazuo-zhe-de-dai/
 */

export function trailingZeroes(n: number): number {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}

type Case = [number, number];

([
  [8, 1],
  [30, 7],
  [3, 0],
  [5, 1],
] as Case[]).forEach(([n, expect]) => {
  const actual = trailingZeroes(n);
  console.info(n, actual, expect === actual);
});
