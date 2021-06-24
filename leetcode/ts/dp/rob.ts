// 打家劫舍
// https://leetcode-cn.com/problems/house-robber/

function rob(nums: number[]): number {
  const len = nums.length;
  if (!len) return 0;
  if (len === 1) return nums[0];

  const dp: number[] = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < len; i += 1) dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);

  return dp[len - 1];
}

type Case = [number[], number];

export default function () {
  ([
    [[1, 2, 3, 1], 4],
    [[2, 7, 9, 3, 1], 12],
  ] as Case[]).forEach(([arr, expect]) => {
    const ret = rob(arr);
    console.info(expect === ret);
  });
}
