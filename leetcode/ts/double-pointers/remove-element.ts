/**
 * https://leetcode-cn.com/problems/remove-element/
 */

export function removeElement(nums: number[], val: number): number {
  if (!nums.length) return 0;

  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (val !== nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }

    fast++;
  }

  return slow;
}
