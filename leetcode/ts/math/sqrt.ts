// x 的平方根
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xwrzwc/

function mySqrt(n: number): number {
  const cache: Record<number, number> = {
    0: 0,
    1: 1,
  };

  function find(x: number) {
    if (cache[x] !== undefined) return cache[x];

    for (let i = 2; i <= x; i += 1) {
      cache[i] = cache[i] || i * i;
      if (cache[i] === x) return i;
      if (cache[i] >= x) return i - 1;
    }

    return -1;
  }

  return find(n);
}

type Case = [number, number];

export default function () {
  ([
    [2, 1],
    [4, 2],
    [8, 2],
  ] as Case[]).forEach(([input, expect]) => {
    const result = mySqrt(input);
    console.info(input, expect, result);
  });
}
