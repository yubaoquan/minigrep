"""
如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。

例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。

给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。

子数组 是数组中的一个连续序列。

示例 1：

输入：nums = [1,2,3,4]
输出：3
解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。

示例 2：

输入：nums = [1]
输出：0
"""

from typing import List


class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return 0
        count = 0
        for left in range(len(nums) - 2):
            diff = nums[left + 1] - nums[left]
            for right in range(left + 2, len(nums)):
                if nums[right] - nums[right - 1] == diff:
                    count += 1
                else:
                    break
        return count

    def numberOfArithmeticSlices2(self, nums: List[int]) -> int:
        n = len(nums)
        if n < 3:
            return 0

        # curr 表示以当前位置结尾的等差数列的个数
        curr = 0
        count = 0

        for i in range(2, n):
            if nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]:
                # 如果当前三个数构成等差数列，那么新的等差数列个数是前一个位置的等差数列个数加1
                curr += 1
                count += curr
            else:
                curr = 0

        return count
