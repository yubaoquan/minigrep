"""
给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。

 s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。

例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。



示例 1：

输入：s = "barfoothefoobarman", words = ["foo","bar"]
输出：[0,9]
解释：因为 words.length == 2 同时 words[i].length == 3，连接的子字符串的长度必须为 6。
子串 "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
子串 "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。
输出顺序无关紧要。返回 [9,0] 也是可以的。
示例 2：

输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
输出：[]
解释：因为 words.length == 4 并且 words[i].length == 4，所以串联子串的长度必须为 16。
s 中没有子串长度为 16 并且等于 words 的任何顺序排列的连接。
所以我们返回一个空数组。
示例 3：

输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
输出：[6,9,12]
解释：因为 words.length == 3 并且 words[i].length == 3，所以串联子串的长度必须为 9。
子串 "foobarthe" 开始位置是 6。它是 words 中以 ["foo","bar","the"] 顺序排列的连接。
子串 "barthefoo" 开始位置是 9。它是 words 中以 ["bar","the","foo"] 顺序排列的连接。
子串 "thefoobar" 开始位置是 12。它是 words 中以 ["the","foo","bar"] 顺序排列的连接。

"""

from typing import List
from collections import Counter
from cases import cases2 as cases


class Solution:
    def findSubstring3(self, s: str, words: List[str]) -> List[int]:
        res = []
        wordNum = len(words)
        if wordNum == 0:
            return res

        wordLen = len(words[0])
        allWords = Counter(words)

        for j in range(wordLen):
            hasWords = Counter()
            num = 0
            i = j
            while i < len(s) - wordNum * wordLen + 1:
                hasRemoved = False
                while num < wordNum:
                    word = s[i + num * wordLen : i + (num + 1) * wordLen]
                    if word in allWords:
                        hasWords[word] += 1
                        if hasWords[word] > allWords[word]:
                            hasRemoved = True
                            removeNum = 0
                            while hasWords[word] > allWords[word]:
                                firstWord = s[
                                    i + removeNum * wordLen : i
                                    + (removeNum + 1) * wordLen
                                ]
                                hasWords[firstWord] -= 1
                                removeNum += 1
                            num = (
                                num - removeNum + 1
                            )  # 加 1 是因为我们把当前单词加入到了 hasWords 2 中
                            i += (removeNum - 1) * wordLen
                            break
                    else:
                        hasWords.clear()
                        i += num * wordLen
                        num = 0
                        break
                    num += 1

                if num == wordNum:
                    res.append(i)

                if num > 0 and not hasRemoved:
                    firstWord = s[i : i + wordLen]
                    hasWords[firstWord] -= 1
                    num -= 1

                i += wordLen
        return res

    def findSubstring2(self, s: str, words: List[str]) -> List[int]:
        if not s or not words:
            return []
        res = []
        wordNum = len(words)
        wordLen = len(words[0])
        allWords = Counter(words)

        for i in range(len(s) - wordNum * wordLen + 1):
            hasWords = Counter()
            num = 0

            while num < wordNum:
                word = s[i + num * wordLen : i + (num + 1) * wordLen]
                if word in allWords:
                    hasWords[word] += 1
                    if hasWords[word] > allWords[word]:
                        break
                else:
                    break
                num += 1
            if num == wordNum:
                res.append(i)
        return res

    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if not s or not words:
            return []

        word_len = len(words[0])
        total_len = len(words) * word_len
        word_count = Counter(words)
        result = []

        # 只需要检查前 word_len 个起始位置
        for i in range(word_len):
            # 使用滑动窗口
            left = i
            curr_count = Counter()

            # 每次移动一个单词的长度
            for right in range(i, len(s) - word_len + 1, word_len):
                word = s[right : right + word_len]

                # 如果当前单词在 words 中
                if word in word_count:
                    curr_count[word] += 1

                    # 如果当前单词出现次数超过 words 中的次数，移动左边界
                    while curr_count[word] > word_count[word]:
                        curr_count[s[left : left + word_len]] -= 1
                        left += word_len

                    # 如果窗口大小等于所有单词的总长度，找到一个解
                    if right - left + word_len == total_len:
                        result.append(left)
                else:
                    # 如果遇到不在 words 中的单词，重置窗口
                    curr_count.clear()
                    left = right + word_len

        return result


solution = Solution()

for caseItem in cases:
    (s, words) = caseItem
    ret = solution.findSubstring3(s, words)
    print(ret)
