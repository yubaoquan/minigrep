// 最长公共子序列
// https://leetcode-cn.com/problems/longest-common-subsequence/

function longestCommonSubsequence(str1: string, str2: string): number {
  // 暴力
  const dp1 = (i: number, j: number): number => {
    if (i === -1 || j === -1) return -1;
    if (str1[i] === str2[j]) return dp1(i - 1, j - 1) + 1;
    return Math.max(dp1(i - 1, j), dp1(i, j - 1));
  };

  console.info(dp1);

  // 备忘录
  const dp: any = {};
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      dp[`${i}-${j}`] = str1[i - 1] === str2[j - 1]
        ? 1 + (dp[`${i - 1}-${j - 1}`] ?? 0)
        : Math.max(dp[`${i - 1}-${j}`] ?? 0, dp[`${i}-${j - 1}`] ?? 0);
    }
  }

  return dp[`${str1.length}-${str2.length}`];
}

type Case = [string, string, number];

export default function() {
  ([
    ['abcde', 'ace', 3],
    ['abc', 'abc', 3],
    ['abc', 'def', 0],
  ] as Case[]).forEach(([str1, str2, expect]) => {
    const actual = longestCommonSubsequence(str1, str2);
    console.info(expect, actual, expect === actual);
  });
}
