// 打家劫舍2
// https://leetcode-cn.com/problems/house-robber-ii/

function rob(nums: number[]): number {
  const len = nums.length;
  if (!len) return 0;
  if (len === 1) return nums[0];

  return Math.max(robRange(nums, 0, len - 2), robRange(nums, 1, len - 1));
}

function robRange(nums: number[], start: number, end: number): number {
  let [dp1, dp2, dpCur] = [0, 0, 0];

  for (let i = end; i >= start; i--) {
    dpCur = Math.max(dp1, nums[i] + dp2);
    dp2 = dp1;
    dp1 = dpCur;
  }

  return dpCur;
}

type Case = [number[], number];

export default function() {
  ([
    [[2, 3, 2], 3],
    [[1, 2, 3, 1], 4],
  ] as Case[]).forEach(([arr, expect]) => {
    const ret = rob(arr);
    console.info(expect, ret, expect === ret);
  });
}
