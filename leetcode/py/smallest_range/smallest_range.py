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


class Solution:
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

    def is_valid1(self, nums: List[List[int]], left_num: int, right_num: int) -> bool:
        return all(any(left_num <= num <= right_num for num in lst) for lst in nums)

    def is_valid2(self, nums: List[List[int]], left_num: int, right_num: int) -> bool:
        for lst in nums:
            if lst[0] > right_num or lst[-1] < left_num:
                return False
        return True


cases = [
    # ([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]], [20, 24]),
    ([[1, 2, 3], [1, 2, 3], [1, 2, 3]], [1, 1]),
    ([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]], [1, 2]),
]

for caseItem in cases:
    case = caseItem[0]
    expected = caseItem[1]
    result = Solution().smallestRange(case)
    result_str = str(result)
    expected_str = str(expected)
    assert result_str == expected_str, f"expected {expected_str}, but got {result_str}"

# print(Solution().is_valid([[4, 10, 15, 24, 26]], 5, 20))
