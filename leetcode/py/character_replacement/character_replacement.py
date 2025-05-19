"""
给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。

在执行上述操作后，返回 包含相同字母的最长子字符串的长度。

示例 1：

输入：s = "ABAB", k = 2
输出：4
解释：用两个'A'替换为两个'B',反之亦然。
示例 2：

输入：s = "AABABBA", k = 1
输出：4
解释：
将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
子串 "BBBB" 有最长重复字母, 答案为 4。
可能存在其他的方法来得到同样的结果。
"""

from collections import Counter


class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        sLen = len(s)
        if sLen <= k:
            return sLen

        charCount = Counter()
        left = 0
        right = 0
        res = 0
        maxCount = 0

        while right < sLen:
            rightChar = s[right]
            charCount[rightChar] += 1
            maxCount = max(maxCount, charCount[rightChar])

            if right - left + 1 - maxCount > k:  # 说明此时 k 不够用
                charCount[s[left]] -= 1
                left += 1

            res = max(res, right - left + 1)
            right += 1

        return res


solution = Solution()
print(solution.characterReplacement("ABBB", 2))
