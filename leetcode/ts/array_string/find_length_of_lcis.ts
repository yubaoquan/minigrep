/** 最长连续递增序列 */
/** https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1035/ */

function findLengthOfLCIS(nums: number[]): number {
  if (!nums.length) return 0;
  let max = 1;
  let currentLength = 1;
  let start = 0;

  while (start < nums.length) {
    let i = start + 1;
    for (; i < nums.length; i++) {
      if (nums[i - 1] < nums[i]) {
        currentLength++;
        max = Math.max(max, currentLength);
      } else {
        start = i;
        currentLength = 1;
        break;
      }
    }
    if (i === nums.length) break;
  }

  return max;
}

console.info(findLengthOfLCIS([1, 3, 5, 4, 7]));
