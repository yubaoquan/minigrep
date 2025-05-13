"""
DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。

例如，"ACGAATTCCG" 是一个 DNA序列 。
在研究 DNA 时，识别 DNA 中的重复序列非常有用。

给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。



示例 1：

输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
输出：["AAAAACCCCC","CCCCCAAAAA"]
示例 2：

输入：s = "AAAAAAAAAAAAA"
输出：["AAAAAAAAAA"]

"""

from collections import Counter
from typing import List


class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        if len(s) < 10:
            return []

        counter = Counter()
        # 先统计所有序列的出现次数
        for i in range(len(s) - 10 + 1):
            counter[s[i : i + 10]] += 1

        # 只返回出现次数大于1的序列
        return [seq for seq, count in counter.items() if count > 1]


solution = Solution()
cases = [
    ("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", ["AAAAACCCCC", "CCCCCAAAAA"]),
    ("AAAAAAAAAAAAA", ["AAAAAAAAAA"]),
]

for caseItem in cases:
    (s, answers) = caseItem
    actualAnswers = solution.findRepeatedDnaSequences(s)
    print(actualAnswers)
    print(set(answers) == set(actualAnswers))
