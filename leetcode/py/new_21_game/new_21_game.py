"""
爱丽丝参与一个大致基于纸牌游戏 “21点” 规则的游戏，描述如下：

爱丽丝以 0 分开始，并在她的得分少于 k 分时抽取数字。 抽取时，她从 [1, maxPts] 的范围中随机获得一个整数作为分数进行累计，其中 maxPts 是一个整数。 每次抽取都是独立的，其结果具有相同的概率。

当爱丽丝获得 k 分 或更多分 时，她就停止抽取数字。

爱丽丝的分数不超过 n 的概率是多少？

与实际答案误差不超过 10-5 的答案将被视为正确答案。

示例 1：

输入：n = 10, k = 1, maxPts = 10
输出：1.00000
解释：爱丽丝得到一张牌，然后停止。

示例 2：

输入：n = 6, k = 1, maxPts = 10
输出：0.60000
解释：爱丽丝得到一张牌，然后停止。 在 10 种可能性中的 6 种情况下，她的得分不超过 6 分。

示例 3：

输入：n = 21, k = 17, maxPts = 10
输出：0.73278
"""

import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent))
from common.common import run_cases

"""
dp[i] = s / maxPts 的解释:

dp[i] = dp[i-1] * (1/maxPts) +      # 从i-1分抽到1的概率
        dp[i-2] * (1/maxPts) +      # 从i-2分抽到2的概率
        dp[i-3] * (1/maxPts) +      # 从i-3分抽到3的概率
        ... +
        dp[i-maxPts] * (1/maxPts)   # 从i-maxPts分抽到maxPts的概率

     = (dp[i-1] + dp[i-2] + dp[i-3] + ... + dp[i-maxPts]) * (1/maxPts)
     = s * (1/maxPts)
     = s / maxPts

if i - maxPts >= 0:
    s -= dp[i - maxPts] 的解释:
这是滑动窗口的维护操作。

对于计算 dp[i]，我们需要考虑前面 maxPts 个位置的概率和，也就是：

dp[i-1], dp[i-2], ..., dp[i-maxPts]
举个例子，假设 maxPts = 3：

计算 dp[4] 时，需要：dp[1] + dp[2] + dp[3]
计算 dp[5] 时，需要：dp[2] + dp[3] + dp[4]
计算 dp[6] 时，需要：dp[3] + dp[4] + dp[5]
可以看到，每次窗口向右移动时：

需要减去窗口最左边的值（不再在窗口范围内的值）
dp[4]时的窗口是[1,2,3]
dp[5]时的窗口是[2,3,4]，需要减去dp[1]
dp[6]时的窗口是[3,4,5]，需要减去dp[2]
"""


class Solution:
    def new21Game(self, n: int, k: int, maxPts: int) -> float:
        if k == 0 or n >= k + maxPts:
            return 1.0
        dp = [0] * (n + 1)
        dp[0] = 1.0
        s = 1.0
        for i in range(1, n + 1):
            dp[i] = s / maxPts
            if i < k:
                s += dp[i]
            if i - maxPts >= 0:
                s -= dp[i - maxPts]
        return sum(dp[k : n + 1])


run_cases(
    [
        ((10, 1, 10), 1.0),
        ((6, 1, 10), 0.6),
        ((21, 17, 10), 0.73278),
    ],
    Solution,
    "new21Game",
)
