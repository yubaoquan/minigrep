/**
 * 递增的三元子序列
 * https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvvuqg/
 */

function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) return false;

  const dp: number[] = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
      if (dp[i] >= 3) return true;
    }
  }

  return dp[dp.length - 1] >= 3;
}

export default () => {
  [
    [1, 2, 3, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [5, 1, 5, 5, 2, 5, 4],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
  ].forEach((arr) => {
    console.info(increasingTriplet(arr));
  });
};
