// 零钱兑换
// https://leetcode-cn.com/problems/coin-change-2/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function change(amount: number, coins: number[]): number {
  const dp: Record<string, number> = {};
  for (let i = 0; i <= coins.length; i += 1) dp[`${i}-0`] = 1;
  for (let i = 1; i <= amount; i += 1) dp[`0-${i}`] = 0;

  for (let i = 1; i <= coins.length; i += 1) {
    for (let j = 1; j <= amount; j += 1) {
      dp[`${i}-${j}`] = j >= coins[i - 1]
        ? dp[`${i - 1}-${j}`] + dp[`${i}-${j - coins[i - 1]}`]
        : dp[`${i - 1}-${j}`];
    }
  }

  return dp[`${coins.length}-${amount}`];
}

// dp 数组压缩版
function change2(amount: number, coins: number[]): number {
  if (!amount) return 1;
  if (!coins.length) return 0;

  const dp: number[] = [1];

  for (let i = 0; i < coins.length; i += 1) {
    for (let j = 1; j <= amount; j += 1) {
      if (j >= coins[i]) dp[j] = (dp[j] ?? 0) + (dp[j - coins[i]] ?? 0);
    }
  }

  return dp[amount] ?? 0;
}

type Case = [number[], number, number];

export default () => {
  ([
    [[1, 2, 5], 5, 4],
    [[2], 3, 0],
    [[10], 10, 1],
  ] as Case[]).forEach(([coins, amount, expect]) => {
    const actual = change2(amount, coins);
    console.info(actual, expect);
    console.info(actual === expect);
  });
};
