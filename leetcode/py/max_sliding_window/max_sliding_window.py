"""
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。

示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
示例 2：

输入：nums = [1], k = 1
输出：[1]
"""

from typing import List
from collections import deque
from cases import cases


class Solution:
    def maxSlidingWindow2(self, nums: List[int], k: int) -> List[int]:
        if len(nums) == 0:
            return []
        kvList = [(index, value) for index, value in enumerate(nums)]
        kvList.sort(key=lambda x: x[1])
        numsLen = len(nums)
        res = [kvList[0][1]] * numsLen

        for item in kvList:
            index = item[0]
            for j in range(index - k + 1, index + 1):
                if res[j] < nums[index]:
                    res[j] = nums[index]
        return res[: numsLen - k + 1]

    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        slices = [nums[i : i + k] for i in range(len(nums) - k + 1)]
        return [max(slice) for slice in slices]

    def maxSlidingWindow3(self, nums: List[int], k: int) -> List[int]:
        if not nums or k == 0:
            return []

        # 使用双端队列，存储下标
        dq = deque()

        # 处理前k个元素
        for i in range(k):
            # 移除队列中所有小于当前元素的元素
            while dq and nums[dq[-1]] < nums[i]:
                dq.pop()
            dq.append(i)

        # 初始化 result 并添加第一个窗口的最大值
        result = [nums[dq[0]]]

        # 处理剩余元素
        for i in range(k, len(nums)):
            # 移除队列中所有小于当前元素的元素
            while dq and nums[dq[-1]] < nums[i]:
                dq.pop()

            # 移除队列中不在当前窗口的元素（索引一定等于 i - k）
            if dq and dq[0] == i - k:
                dq.popleft()

            dq.append(i)
            result.append(nums[dq[0]])

        return result


solution = Solution()
print(solution.maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
print(solution.maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7], 3))
print(solution.maxSlidingWindow3([1, 3, -1, -3, 5, 3, 6, 7], 3))
# for caseItem in cases:
#     print(solution.maxSlidingWindow3(caseItem[0], caseItem[1]))
