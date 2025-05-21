"""
给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

任何误差小于 10-5 的答案都将被视为正确答案。

示例 1：
输入：nums = [1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

示例 2：
输入：nums = [5], k = 1
输出：5.00000
"""

from typing import List
import sys
from pathlib import Path

# 添加父目录到Python路径中，这样就能导入common模块
sys.path.append(str(Path(__file__).parent.parent))
from common.common import run_cases


class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        window = nums[:k]
        sum_num = sum(window)
        max_sum = sum_num
        for i in range(len(nums) - k):
            sum_num += nums[i + k] - nums[i]
            if sum_num > max_sum:
                max_sum = sum_num
        return max_sum / k


run_cases(
    [
        ([[1, 12, -5, -6, 50, 3], 4], 12.75),
        ([[5], 1], 5.0),
    ],
    Solution,
    "findMaxAverage",
)
