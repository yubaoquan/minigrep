function maxProfitKInf(prices: number[]) {
  const n = prices.length;
  if (!n) return 0;

  let dpI0 = 0;
  let dpI1 = Number.NEGATIVE_INFINITY; // 最开始一天, 手里不可能有股票

  for (let i = 0; i < n; i += 1) {
    const t = dpI0;
    dpI0 = Math.max(dpI0, dpI1 + prices[i]);
    dpI1 = Math.max(dpI1, t - prices[i]);
  }

  return dpI0;
}

function maxProfit(maxK: number, prices: number[]): number {
  const n = prices.length;
  if (!n) return 0;
  if (maxK > n / 2) return maxProfitKInf(prices);

  const dp: Record<string, number> = {};

  for (let i = 0; i < n; i += 1) {
    dp[`${i}-0-0`] = 0;
    dp[`${i}-0-1`] = Number.NEGATIVE_INFINITY;

    for (let k = maxK; k >= 1; k -= 1) {
      if (i === 0) {
        dp[`${i}-${k}-0`] = 0;
        dp[`${i}-${k}-1`] = -prices[0];
      } else {
        dp[`${i}-${k}-0`] = Math.max(dp[`${i - 1}-${k}-0`], dp[`${i - 1}-${k}-1`] + prices[i]);
        dp[`${i}-${k}-1`] = Math.max(dp[`${i - 1}-${k}-1`], dp[`${i - 1}-${k - 1}-0`] - prices[i]);
      }
    }
  }

  return dp[`${n - 1}-${maxK}-0`];
}

type Case = [number[], number, number];

export default function () {
  ([
    [[1, 2], 1, 1],
    [[2, 4, 1], 2, 2],
    [[3, 2, 6, 5, 0, 3], 2, 7],
  ] as Case[]).forEach(([arr, k, result]) => {
    console.info(maxProfit(k, arr));
    console.info(maxProfit(k, arr) === result);
  });
}
