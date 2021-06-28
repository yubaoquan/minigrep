/**
 * 完全平方数
 * https://leetcode-cn.com/leetbook/read/queue-stack/kfgtt/
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.

 */

function numSquares(n: number): number {
  const q: number[] = [n];
  let res = 1;
  const record: Record<number, number> = {};

  function square(x: number) {
    if (record[x] !== undefined) return record[x];
    record[x] = x * x;
    return record[x];
  }

  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i += 1) {
      const cur = q.shift()!;
      const start = Math.floor(Math.sqrt(cur));
      for (let j = start; j > 0; j -= 1) {
        if (cur === square(j)) return res;
        q.push(cur - square(j));
      }
    }
    res += 1;
  }
  return res;
}

export default () => {
  [12, 13].forEach((num) => {
    console.info(numSquares(num));
  });
};
