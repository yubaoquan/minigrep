// 背包
// 分割等和子集
// https://leetcode-cn.com/problems/partition-equal-subset-sum/

function canPartition(nums: number[]): boolean {
  let sum = nums.reduce((total, cur) => total + cur, 0);
  if (sum % 2 !== 0) return false;

  sum /= 2;
  const dp = Array(sum + 1).fill(false);
  dp[0] = true;

  nums.forEach((t) => {
    for (let j = sum; j >= 0; j -= 1) {
      if (j >= t) dp[j] = dp[j] || dp[j - t];
    }
  });

  return dp[sum];
}

type Case = [number[], boolean];

export default function () {
  ([
    [[1, 5, 11, 5], true],
    [[1, 2, 3, 5], false],
  ] as Case[]).forEach(([nums, expect]) => {
    const ret = canPartition(nums);
    console.info(ret === expect);
  });
}
