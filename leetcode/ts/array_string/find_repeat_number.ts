/**
 * 数组中重复的数字
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */

export function findRepeatNumber(nums: number[]): number {
  const memo: Record<number, boolean> = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (memo[nums[i]]) return nums[i];
    memo[nums[i]] = true;
  }
  return -1;
}
