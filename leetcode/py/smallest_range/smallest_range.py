"""
你有 k 个 非递减排列 的整数列表。找到一个 最小 区间，使得 k 个列表中的每个列表至少有一个数包含在其中。

我们定义如果 b-a < d-c 或者在 b-a == d-c 时 a < c，则区间 [a,b] 比 [c,d] 小。

示例 1：

输入：nums = [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
输出：[20,24]
解释：
列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。
列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。
列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。

示例 2：

输入：nums = [[1,2,3],[1,2,3],[1,2,3]]
输出：[1,1]
"""

from typing import List
from cases import long_case
import heapq


class Solution:
    def smallestRange2(self, nums: List[List[int]]) -> List[int]:
        rangeLeft, rangeRight = -(10**9), 10**9
        maxValue = max(vec[0] for vec in nums)
        priorityQueue = [(vec[0], i, 0) for i, vec in enumerate(nums)]
        heapq.heapify(priorityQueue)

        while True:
            minValue, row, idx = heapq.heappop(priorityQueue)
            if maxValue - minValue < rangeRight - rangeLeft:
                rangeLeft, rangeRight = minValue, maxValue
            if idx == len(nums[row]) - 1:
                break
            maxValue = max(maxValue, nums[row][idx + 1])
            heapq.heappush(priorityQueue, (nums[row][idx + 1], row, idx + 1))

        return [rangeLeft, rangeRight]

    def smallestRange(self, nums: List[List[int]]) -> List[int]:
        all_nums = []
        for num in nums:
            all_nums.extend(num)
        all_nums = list(set(all_nums))
        all_nums.sort()

        min_num = min(num[0] for num in nums)
        max_num = max(num[-1] for num in nums)

        left = 0
        right = 0
        res = [min_num, max_num]
        max_diff = max_num - min_num

        while right < len(all_nums):
            left_num = all_nums[left]
            right_num = all_nums[right]

            if self.is_valid(nums, left_num, right_num):
                if right_num - left_num < max_diff:
                    max_diff = right_num - left_num
                    res = [left_num, right_num]
                left += 1
                if left > right:
                    right += 1
            else:
                right += 1
        return res

    def is_valid(self, nums: List[List[int]], left_num: int, right_num: int) -> bool:
        return all(any(left_num <= num <= right_num for num in lst) for lst in nums)


cases = [
    ([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]], [20, 24]),
    ([[1, 2, 3], [1, 2, 3], [1, 2, 3]], [1, 1]),
    ([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]], [1, 2]),
    long_case,
]

for caseItem in cases:
    case = caseItem[0]
    expected = caseItem[1]
    result = Solution().smallestRange2(case)
    result_str = str(result)
    expected_str = str(expected)
    assert result_str == expected_str, f"expected {expected_str}, but got {result_str}"
