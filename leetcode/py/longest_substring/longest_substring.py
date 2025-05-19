"""
给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

如果不存在这样的子字符串，则返回 0。

示例 1：

输入：s = "aaabb", k = 3
输出：3
解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。

示例 2：

输入：s = "ababbc", k = 2
输出：5
解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
"""

from collections import Counter


class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        charCounter = Counter()
        charPositions = {}

        for i, char in enumerate(s):
            charCounter[char] += 1
            positions = charPositions.get(char, [])
            positions.append(i)
            charPositions[char] = positions

        ltKChars = [c for c, count in charCounter.items() if count < k]
        invalidPositions = []

        if not ltKChars:
            return len(s)

        if len(ltKChars) == len(charCounter):
            return 0

        for c in ltKChars:
            positions = charPositions.get(c)
            invalidPositions.extend(positions)

        strs = []
        invalidPositions.sort()

        if 0 not in invalidPositions:
            strs.append(s[: invalidPositions[0]])

        for posIndex, pos in enumerate(invalidPositions):
            end = (
                len(s)
                if posIndex + 1 == len(invalidPositions)
                else invalidPositions[posIndex + 1]
            )
            strs.append(s[pos + 1 : end])

        return max([self.longestSubstring(substr, k) for substr in strs])


solution = Solution()

cases = [
    ("aaabb", 3, 3),
    ("ababbc", 2, 5),
    ("aaabbb", 3, 6),
    ("weitong", 2, 0),
    ("ababacb", 3, 0),
]

for caseItem in cases:
    value = solution.longestSubstring(caseItem[0], caseItem[1])
    print(f"{value} {value == caseItem[2]}")
