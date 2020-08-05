/**
 * 完全平方数
 * https://leetcode-cn.com/leetbook/read/queue-stack/kfgtt/
 */

function numSquares(n: number): number {
  const q: number[] = [n];
  let res = 1;
  const record: any = {};

  function square(x: number) {
    if (record[x] !== undefined) return record[x];
    record[x] = x * x;
    return record[x];
  }

  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const cur = q.shift()!;
      const start = Math.floor(Math.sqrt(cur));
      for (let j = start; j > 0; j--) {
        if (cur === square(j)) return res;
        q.push(cur - square(j));
      }
    }
    res += 1;
  }
  return res;
}

export default function() {
  [12, 13].forEach(num => {
    console.info(numSquares(num));
  });
}
