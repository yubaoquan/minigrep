// 搜索旋转排序数组
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvyz1t/
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/ji-jian-solution-by-lukelee/238331

function search(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (target === nums[mid]) return mid;

    if (nums[lo] <= nums[mid]) {
      if (target >= nums[lo] && target < nums[mid]) hi = mid - 1;
      else lo = mid + 1;
    } else if (target > nums[mid] && target <= nums[hi]) lo = mid + 1;
    else hi = mid - 1;
  }

  return -1;
}

type Case = [number[], number, number];

export default () => {
  ([
    [[4, 5, 6, 7, 0, 1, 2], 0, 4],
    [[4, 5, 6, 7, 0, 1, 2], 3, -1],
  ] as Case[]).forEach(([nums, target, expect]) => {
    const ret = search(nums, target);
    console.info(expect, ret, expect === ret);
  });
};
