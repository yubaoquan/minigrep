/**
 * 寻找旋转排序数组中的最小值
 * https://leetcode-cn.com/leetbook/read/array-and-string/c3ki5/
 */

function findMin(nums: number[]): number {
  for (let i = 0; i + 1 < nums.length; i++) if (nums[i] > nums[i + 1]) return nums[i + 1];

  return nums[0];
}

export default function() {
  [
    [3, 4, 5, 1, 2],
    [4, 5, 6, 7, 0, 1, 2],
  ].forEach(arr => {
    console.info(findMin(arr));
  });
}
