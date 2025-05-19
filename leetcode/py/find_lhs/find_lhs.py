"""
和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1 。

给你一个整数数组 nums ，请你在所有可能的 子序列 中找到最长的和谐子序列的长度。

数组的 子序列 是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。

示例 1：

输入：nums = [1,3,2,2,5,2,3,7]
输出：5
解释：最长和谐子序列是 [3,2,2,2,3]。

示例 2：

输入：nums = [1,2,3,4]
输出：2
解释：最长和谐子序列是 [1,2]，[2,3] 和 [3,4]，长度都为 2。

示例 3：

输入：nums = [1,1,1,1]
输出：0
解释：不存在和谐子序列。
"""

from typing import List
from collections import Counter
from cases import longCase


class Solution:
    def findLHS(self, nums: List[int]) -> int:
        nums_len = len(nums)
        if nums_len < 2:
            return 0

        sorted_nums = sorted(nums)

        if sorted_nums[0] - sorted_nums[-1] == -1:
            return nums_len

        if nums_len == 2 or sorted_nums[0] == sorted_nums[-1]:
            return 0

        left = 0
        right = 0
        res = 0

        while right < nums_len:
            left_num = sorted_nums[left]
            right_num = sorted_nums[right]
            diff = right_num - left_num

            if diff == 1:
                res = max(res, right - left + 1)
                right += 1
            elif diff > 1:
                left += 1
            else:
                right += 1

        return res

    def findLHS2(self, nums: List[int]) -> int:
        nums_len = len(nums)
        if nums_len < 2:
            return 0

        sorted_nums = sorted(nums)

        if sorted_nums[0] == sorted_nums[-1]:
            return 0

        if sorted_nums[0] - sorted_nums[-1] == -1:
            return nums_len

        if nums_len == 2:
            return 0

        left = 0
        res = 0
        checked_left_num = Counter()

        while left < nums_len - 1:
            left_num = sorted_nums[left]
            if left_num in checked_left_num:
                left += 1
                continue
            checked_left_num[left_num] = 1

            right = nums_len - 1
            checked_right_num = Counter()

            while right > left:
                right_num = sorted_nums[right]
                if right_num in checked_right_num:
                    right -= 1
                    continue
                checked_right_num[right_num] = 1

                if right_num - left_num == 1:
                    res = max(res, right - left + 1)
                    break
                right -= 1
            left += 1
        return res


cases = [([1, 3, 2, 2, 5, 2, 3, 7], 5), longCase]

for item in cases:
    result = Solution().findLHS(item[0])
    print(f"result: {result}, expected: {item[1]}")
    assert result == item[1], f"Test failed for input {item[0]}"
