// 股票问题
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
// https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/tuan-mie-gu-piao-wen-ti

function maxProfit(prices: number[]): number {
  const n = prices.length;
  if (!n) return 0;
  const dp: any = {};
  dp[0] = [0, -prices[0]];

  for (let i = 1; i < n; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]),
      Math.max(dp[i - 1][1], -prices[i]),
    ];
  }

  return dp[n - 1][0];
}

type Case = [number[], number];

export default function() {
  ([
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
  ] as Case[]).forEach(([arr, result]) => {
    console.info(maxProfit(arr) === result);
  });
}
