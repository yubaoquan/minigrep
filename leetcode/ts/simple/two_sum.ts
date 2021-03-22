/**
 * 和为s的两个数字
 * https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 */

export function twoSum(nums: number[], target: number): number[] {
  const memo: Record<number, boolean> = {};
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (memo[num]) return [nums[i], num];
    memo[nums[i]] = true;
  }
  return [];
}
