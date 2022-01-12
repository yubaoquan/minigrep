/**
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/
 */

export function subarraySum(nums: number[], k: number): number {
  const preSum: Record<number, number> = { 0: 1 };

  let ret = 0;
  let sum0I = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sum0I += nums[i];
    const sum0J = sum0I - k;
    if (preSum[sum0J]) ret += preSum[sum0J];

    preSum[sum0I] = (preSum[sum0I] || 0) + 1;
  }

  return ret;
}

const test = () => {
  console.info(subarraySum([1, 1, 1], 2) === 2);
  console.info(subarraySum([1, 2, 3], 3) === 2);
};

test();
