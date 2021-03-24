// 戳气球
// https://leetcode-cn.com/problems/burst-balloons/

// 回溯版
function maxCoins2(numbs: number[]): number {
  const memo: Record<string, number> = {};

  function dp(nums: number[]): number {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];

    const key = nums.join(',');
    if (memo[key]) return memo[key];

    if (nums.length === 2) {
      const ret = (nums[0] * nums[1]) + Math.max(nums[0], nums[1]);
      memo[key] = ret;
      return ret;
    }

    let ret = 0;
    for (let i = 0; i < nums.length; i++) {
      const a = i === 0 ? 1 : nums[i - 1];
      const b = nums[i];
      const c = i === nums.length - 1 ? 1 : nums[i + 1];
      const dpRet = dp(nums.filter((_, index) => index !== i));

      ret = Math.max(ret, (a * b * c) + dpRet);
    }

    memo[key] = ret;

    return ret;
  }

  return dp(numbs);
}

// 动态规划版
function maxCoins(nums: number[]): number {
  if (!nums.length) return 0;
  const points: number[] = [];
  const n = nums.length;
  points[0] = 1;
  points[n + 1] = 1;

  for (let i = 1; i <= n; i++) {
    points[i] = nums[i - 1];
  }

  const dp: Record<string, number> = {};

  for (let i = n; i >= 0; i--) {
    for (let j = i + 1; j < n + 2; j++) {
      for (let k = i + 1; k < j; k++) {
        const ij = dp[`${i}-${j}`] ?? 0;
        const ik = dp[`${i}-${k}`] ?? 0;
        const kj = dp[`${k}-${j}`] ?? 0;
        const ijk = points[i] * points[j] * points[k];
        dp[`${i}-${j}`] = Math.max(ij, ik + kj + ijk);
      }
    }
  }

  return dp[`0-${n + 1}`];
}

type Case = [number[], number];

export default function() {
  console.info(maxCoins2);
  ([
    // [[3, 5, 8], 120],

    [[3, 1, 5, 8], 167],
  ] as Case[]).forEach(([nums, expect]) => {
    const actual = maxCoins(nums);
    console.info(expect, actual, expect === actual);
  });
}
