"""
给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。

示例 1：
输入：nums = [10,5,2,6], k = 100
输出：8
解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2]、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。

示例 2：

输入：nums = [1,2,3], k = 0
输出：0
"""

from typing import List
import sys
from pathlib import Path
from long_case1 import long_case1
from long_case2 import long_case2
from long_case3 import long_case3

sys.path.append(str(Path(__file__).parent.parent))
from common.common import run_cases


class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        res = 0
        nums_len = len(nums)
        arr = [1] * nums_len

        for i in range(1, nums_len + 1):
            nums_len -= 1
            all_invalid = True

            for j in range(nums_len + 1):
                if arr[j] >= k:
                    continue
                all_invalid = False
                if nums[i + j - 1] > 1:
                    arr[j] *= nums[i + j - 1]
                if arr[j] < k:
                    res += 1

            if all_invalid:
                break

        return res

    def numSubarrayProductLessThanK2(self, nums: List[int], k: int) -> int:
        res = len(list(filter(lambda x: x < k, nums)))
        arr = nums[:]
        nums_len = len(nums)

        for i in range(2, nums_len + 1):
            nums_len -= 1

            for j in range(nums_len):
                arr[j] *= nums[i + j - 1]
                if arr[j] < k:
                    res += 1

        return res

    def numSubarrayProductLessThanK1(self, nums: List[int], k: int) -> int:
        res = len(list(filter(lambda x: x < k, nums)))
        arr = nums

        for i in range(2, len(nums) + 1):
            arr = arr[:-1]

            for j in range(len(arr)):
                arr[j] *= nums[i + j - 1]
                if arr[j] < k:
                    res += 1

        return res

    def numSubarrayProductLessThanK0(self, nums: List[int], k: int) -> int:
        res = 0
        multiply_of_n = {
            1: nums,
        }

        for i in range(2, len(nums) + 1):
            multiply_of_n[i] = multiply_of_n[i - 1][:-1]

            for j in range(len(multiply_of_n[i])):
                multiply_of_n[i][j] *= nums[i + j - 1]

        for value in multiply_of_n.values():
            res += len(list(filter(lambda x: x < k, value)))

        return res


run_cases(
    [
        (([10, 5, 2, 6], 100), 8),
        (([1, 2, 3], 0), 0),
        (([10, 2, 2, 5, 4, 4, 4, 3, 7, 7], 289), 31),
        long_case1,
        long_case2,
        long_case3,
    ],
    Solution,
    "numSubarrayProductLessThanK",
)
