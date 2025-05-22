"""
给你一个整数数组 nums 和一个整数 k ，找出三个长度为 k 、互不重叠、且全部数字和最大的子数组，并返回这三个子数组。

以下标的数组形式返回结果，数组中的每一项分别指示每个子数组的起始位置（下标从 0 开始）。如果有多个结果，返回字典序最小的一个。

示例 1：
输入：nums = [1,2,1,2,6,7,5,1], k = 2
输出：[0,3,5]
解释：子数组 [1, 2], [2, 6], [7, 5] 对应的起始下标为 [0, 3, 5]。
也可以取 [2, 1], 但是结果 [1, 3, 5] 在字典序上更小。

示例 2：
输入：nums = [1,2,1,2,1,2,1,2,1], k = 2
输出：[0,2,4]
"""

from typing import List
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent))
from common.common import run_cases


class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        sum = [0] * (n + 1)
        for i in range(n):
            sum[i + 1] = sum[i] + nums[i]

        f = [[0] * 4 for _ in range(n + 10)]
        for i in range(n - k + 1, 0, -1):
            for j in range(1, 4):
                f[i][j] = max(
                    f[i + 1][j], f[i + k][j - 1] + sum[i + k - 1] - sum[i - 1]
                )

        ans = []
        i = 1
        j = 3
        while j > 0:
            if f[i + 1][j] > f[i + k][j - 1] + sum[i + k - 1] - sum[i - 1]:
                i += 1
            else:
                ans.append(i - 1)
                j -= 1
                i += k
        return ans


run_cases(
    [
        (([1, 2, 1, 2, 6, 7, 5, 1], 2), [0, 3, 5]),
        (([1, 2, 1, 2, 1, 2, 1, 2, 1], 2), [0, 2, 4]),
    ],
    Solution,
    "maxSumOfThreeSubarrays",
)
