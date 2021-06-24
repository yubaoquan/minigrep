// 主要元素
// https://leetcode-cn.com/problems/find-majority-element-lcci/
// https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/

function majorityElement(nums: number[]): number {
  const rec: Record<number, number> = {};
  const half = nums.length / 2;

  for (let i = 0; i < nums.length; i += 1) {
    const t = nums[i];
    rec[t] = rec[t] ? rec[t] + 1 : 1;
    if (rec[t] > half) return t;
  }
  return -1;
}

type Case = [number[], number];

export default function () {
  ([
    [[1, 2, 5, 9, 5, 9, 5, 5, 5], 5],
    [[3, 2], -1],
    [[2, 2, 1, 1, 1, 2, 2], 2],
  ] as Case[]).forEach(([arr, expect]) => {
    const ret = majorityElement(arr);
    console.info(ret);
    console.info(ret === expect);
  });
}
