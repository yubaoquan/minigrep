/**
 * 三数之和
 * https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvpj16/
 */

function nSum(nums: number[], n: number, start: number, target: number): number[][] {
  const ret: number[][] = [];
  if (n < 2 || nums.length < n) return ret;

  if (n === 2) {
    let [lo, hi] = [start, nums.length - 1];
    while (lo < hi) {
      const sum = nums[lo] + nums[hi];
      const [left, right] = [nums[lo], nums[hi]];
      if (sum < target) {
        while (lo < hi && nums[lo] === left) lo += 1;
      } else if (sum > target) {
        while (lo < hi && nums[hi] === right) hi -= 1;
      } else {
        ret.push([left, right]);
        while (lo < hi && nums[lo] === left) lo += 1;
        while (lo < hi && nums[hi] === right) hi -= 1;
      }
    }
  } else {
    for (let i = start; i < nums.length; i++) {
      const sub = nSum(nums, n - 1, i + 1, target - nums[i]);
      sub.forEach(arr => ret.push([...arr, nums[i]]));
      while (i < nums.length - 1 && nums[i] === nums[i + 1]) i += 1;
    }
  }

  return ret;
}

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => (a > b ? 1 : -1));
  return nSum(nums, 3, 0, 0);
}

export default function() {
  const ret = threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
  console.info(ret);
}
