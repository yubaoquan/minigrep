"""
给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

示例 1：
输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
输出：3
解释：长度最长的公共子数组是 [3,2,1] 。

示例 2：
输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
输出：5
"""

from typing import List
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent))
from common.common import run_cases


class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        n = len(nums1)
        m = len(nums2)
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        max_length = 0

        for i in range(1, n + 1):
            for j in range(1, m + 1):
                if nums1[i - 1] == nums2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                    max_length = max(max_length, dp[i][j])

        return max_length


run_cases(
    [
        (([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]), 3),
        (([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]), 5),
    ],
    Solution,
    "findLength",
)
