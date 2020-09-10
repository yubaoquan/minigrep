function maxProfit(prices: number[]): number {
  const n = prices.length;
  if (!n) return 0;

  let dpI0 = 0;
  let dpI1 = Number.NEGATIVE_INFINITY; // 最开始一天, 手里不可能有股票

  for (let i = 0; i < n; i++) {
    const t = dpI0;
    dpI0 = Math.max(dpI0, dpI1 + prices[i]);
    dpI1 = Math.max(dpI1, t - prices[i]);
  }

  return dpI0;
}

type Case = [number[], number];

export default function() {
  ([
    [[7, 1, 5, 3, 6, 4], 7],
    [[1, 2, 3, 4, 5], 4],
    [[7, 6, 4, 3, 1], 0],
  ] as Case[]).forEach(([arr, result]) => {
    console.info(maxProfit(arr) === result);
  });
}
