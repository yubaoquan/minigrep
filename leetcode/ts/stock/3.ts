function maxProfit(prices: number[]): number {
  const n = prices.length;
  if (!n) return 0;

  let dpI10 = 0;
  let dpI11 = Number.NEGATIVE_INFINITY; // 最开始一天, 手里不可能有股票
  let dpI20 = 0;
  let dpI21 = Number.NEGATIVE_INFINITY;

  prices.forEach(price => {
    dpI20 = Math.max(dpI20, dpI21 + price);
    dpI21 = Math.max(dpI21, dpI10 - price);
    dpI10 = Math.max(dpI10, dpI11 + price);
    dpI11 = Math.max(dpI11, -price);
  });

  return dpI20;
}

export default function() {
  [
    [[3, 3, 5, 0, 0, 3, 1, 4], 6],
    [[1, 2, 3, 4, 5], 4],
    [[7, 6, 4, 3, 1], 0],
    [[2, 1, 2, 0, 1], 2],
  ].forEach(([arr, result]: any) => {
    console.info(maxProfit(arr) === result);
  });
}
