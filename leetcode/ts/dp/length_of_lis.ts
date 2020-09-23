function lengthOfLIS(nums: number[]): number {
  if (!nums.length) return 0;
  const dp: number[] = Array(nums.length).fill(1);

  nums.forEach((t, i) => {
    for (let j = 0; j < i; j++) {
      if (nums[j] < t) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  });

  return dp.reduce((ret, cur) => Math.max(ret, cur), 1);
}

type Case = [number[], number];

export default function() {
  ([
    [[10, 9, 2, 5, 3, 7, 101, 18], 4],
    [[5, 1, 5, 5, 2, 5, 4], 3],
  ] as Case[]).forEach(([nums, expect]) => {
    const actual = lengthOfLIS(nums);
    console.info(expect, actual, expect === actual);
  });
}
