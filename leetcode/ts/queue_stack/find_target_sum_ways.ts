/**
 * 目标和
 * https://leetcode-cn.com/leetbook/read/queue-stack/ga4o2/
 *
 * 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例：

输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。

 */

function findTargetSumWays(nums: number[], S: number): number {
  if (!nums.length) return 0;
  if (nums.length === 1) {
    if (nums[0] === 0 && S === 0) return 2;
    return Math.abs(nums[0]) === Math.abs(S) ? 1 : 0;
  }

  const slice = nums.slice(1);
  const plusWays = findTargetSumWays(slice, S - nums[0]);
  const minusWays = findTargetSumWays(slice, S + nums[0]);

  return plusWays + minusWays;
}

type Case = [number[], number];

export default function() {
  ([
    [[1, 1, 1, 1, 1], 3],
    [[1, 0], 1],
  ] as Case[]).forEach(([arr, s]) => {
    const res = findTargetSumWays(arr, s);
    console.info(res);
  });
}
