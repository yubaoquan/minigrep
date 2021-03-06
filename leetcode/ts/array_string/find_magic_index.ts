/**
 * 魔术索引
 * https://leetcode-cn.com/problems/magic-index-lcci/
 */

export function findMagicIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i += 1) if (nums[i] === i) return i;
  return -1;
}
