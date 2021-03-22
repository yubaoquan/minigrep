/**
 * 在排序数组中查找数字 I
 * https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 * https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/solution/mian-shi-ti-53-i-zai-pai-xu-shu-zu-zhong-cha-zha-5/
 */

function search(nums: number[], target: number): number {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (nums[m] <= target) i = m + 1;
    else j = m - 1;
  }

  const right = i;
  if (j >= 0 && nums[j] !== target) return 0;

  i = 0;
  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (nums[m] < target) i = m + 1;
    else j = m - 1;
  }
  const left = j;
  return right - left - 1;
}

console.info(search([1, 4], 4));
console.info(search([2, 2], 2));
console.info(search([1], 1));
console.info(search([5, 7, 7, 8, 8, 10], 8));
console.info(search([5, 7, 7, 8, 8, 10], 6));
