/**
 * https://leetcode-cn.com/problems/move-zeroes/
 */

export function moveZeroes(nums: number[]): void {
  if (!nums) return;

  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[slow] === 0 && nums[fast] !== 0) {
      nums[slow] = nums[fast];
      nums[fast] = 0;
      slow++;
    } else if (nums[slow] !== 0) slow++;

    fast++;
  }
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.info(arr);
