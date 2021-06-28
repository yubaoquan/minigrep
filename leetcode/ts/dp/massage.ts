function massage(nums: number[]): number {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];

  const n = nums.length;

  const dp: number[] = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i += 1) dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);

  return dp[n - 1];
}

type Case = [number[], number];

export default () => {
  ([
    [[1, 2, 3, 1], 4],
    [[2, 7, 9, 3, 1], 12],
    [[2, 1, 4, 5, 3, 1, 1, 3], 12],
  ] as Case[]).forEach(([arr, expect]) => {
    const ret = massage(arr);
    console.info(expect === ret);
  });
};
