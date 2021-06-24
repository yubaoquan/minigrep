/** 俄罗斯套娃信封问题 */
/** https://leetcode-cn.com/explore/interview/card/bytedance/246/dynamic-programming-or-greedy/1031/ */
/** https://leetcode-cn.com/problems/russian-doll-envelopes/solution/zui-chang-shang-sheng-zi-xu-lie-bian-xin-6s8d/ */

function check(es: number[][], mid: number, i: number) {
  return es[mid][0] < es[i][0] && es[mid][1] < es[i][1];
}

export function maxEnvelopes(envelopes: number[][]): number {
  const n = envelopes.length;
  if (!n) return 0;
  envelopes.sort((a, b) => a[0] - b[0]);
  const f: number[] = Array(n).fill(1);
  let ans = 1;

  for (let i = 0; i < n; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (check(envelopes, j, i)) {
        f[i] = Math.max(f[i], f[j] + 1);
      }
    }
    ans = Math.max(ans, f[i]);
  }
  return ans;
}

interface Case {
  envolopes: [number, number][];
  expect: number;
}

([
  { envolopes: [[5, 4], [6, 4], [6, 7], [2, 3], [10, 10], [1, 1]], expect: 5 },
  { envolopes: [[46, 89], [50, 53], [52, 68], [72, 45], [77, 81]], expect: 2 },
  { envolopes: [[10, 14], [18, 3], [17, 4], [9, 6], [3, 7]], expect: 2 },
] as Case[]).forEach(({ envolopes, expect }) => {
  const actual = maxEnvelopes(envolopes);
  console.info(actual === expect);
});

// const input = [[5, 4], [6, 4], [6, 7], [2, 3], [10, 10], [1, 1]];
// const input = [[46, 89], [50, 53], [52, 68], [72, 45], [77, 81]];
const input = [[10, 14], [18, 3], [17, 4], [9, 6], [3, 7]];
console.info(maxEnvelopes(input));
