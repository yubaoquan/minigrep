// 前 K 个高频元素
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvzpxi/

function topKFrequent(nums: number[], k: number): number[] {
  const memo: any = {};
  nums.forEach(t => {
    memo[t] = memo[t] ? memo[t] + 1 : 1;
  });

  type Entry = [string, number];

  return (Object.entries(memo) as Entry[])
    .sort(([, value1], [, value2]) => -value1 + value2)
    .map(([key]) => +key).slice(0, k);
}

type Case = [number[], number, number[]];

function arrEq(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  return a.every(t => b.includes(t));
}

export default function() {
  ([
    [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
    [[1], 1, [1]],
  ] as Case[]).forEach(([nums, k, expect]) => {
    const ret = topKFrequent(nums, k);
    console.info(ret);
    console.info(arrEq(ret, expect));
  });
}
