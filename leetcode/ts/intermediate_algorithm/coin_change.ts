// 零钱兑换
// https://leetcode-cn.com/problems/coin-change/
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvf0kh/

function coinChange(coins: number[], amount: number): number {
  const memo: any = {};

  const dp = (n: number) => {
    if (memo[n] !== undefined) return memo[n];
    if (!n) return 0;
    if (n < 0) return -1;

    let ret = Number.MAX_VALUE;

    coins.forEach(coin => {
      const subProblem = dp(n - coin);
      if (subProblem !== -1) ret = Math.min(ret, 1 + subProblem);
    });

    memo[n] = ret !== Number.MAX_VALUE ? ret : -1;
    return memo[n];
  };

  return dp(amount);
}

type Case = [number[], number, number];

export default function() {
  ([
    [[186, 419, 83, 408], 6249, 20],
    [[2, 5, 10, 1], 27, 4],
    [[1, 2, 5], 11, 3],
    [[2], 3, -1],
  ] as Case[]).forEach(([coins, amount, expect]) => {
    const actual = coinChange(coins, amount);
    console.info(expect, actual, expect === actual);
  });
}
