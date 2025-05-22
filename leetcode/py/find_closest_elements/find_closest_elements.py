"""
给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

整数 a 比整数 b 更接近 x 需要满足：

|a - x| < |b - x| 或者
|a - x| == |b - x| 且 a < b

示例 1：
输入：arr = [1,2,3,4,5], k = 4, x = 3
输出：[1,2,3,4]

示例 2：
输入：arr = [1,1,2,3,4,5], k = 4, x = -1
输出：[1,1,2,3]
"""

from typing import List
import sys
from pathlib import Path
import heapq

sys.path.append(str(Path(__file__).parent.parent))
from common.common import run_cases


class Solution:
    def findClosestElements2(self, arr: List[int], k: int, x: int) -> List[int]:
        diff = [(abs(num - x), i) for i, num in enumerate(arr)]
        heapq.heapify(diff)
        return sorted([arr[item[1]] for item in heapq.nsmallest(k, diff)])

    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        if x < arr[0]:
            return arr[:k]
        if x > arr[-1]:
            return arr[-k:]

        left, right = 0, len(arr) - 1
        while right - left >= k:
            if abs(arr[left] - x) <= abs(arr[right] - x):
                right -= 1
            else:
                left += 1
        return arr[left : left + k]


run_cases(
    [
        (([1, 2, 3, 4, 5], 4, 3), [1, 2, 3, 4]),
        (([1, 1, 2, 3, 4, 5], 4, -1), [1, 1, 2, 3]),
    ],
    Solution,
    "findClosestElements",
)
