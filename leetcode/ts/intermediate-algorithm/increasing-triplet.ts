/**
 * 递增的三元子序列
 * https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvvuqg/
 */

function increasingTriplet(nums: number[]): boolean {
  let counter = 1;
  for (let i = 0; i + 1 < nums.length; i++) {
    if (nums[i] < nums[i + 1]) counter += 1;
    else counter = 1;
    if (counter === 3) return true;
  }

  return counter === 3;
}

export default function() {
  [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
  ].forEach(arr => {
    console.info(increasingTriplet(arr));
  });
}
