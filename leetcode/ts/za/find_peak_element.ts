// 寻找峰值
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv4hjg/

function findPeakElement(nums: number[]): number {
  if (nums.length === 1) return 0;
  if (nums.length === 2) return nums[0] > nums[1] ? 0 : 1;
  if (nums[0] > nums[1]) return 0;
  for (let i = 1; i < nums.length - 1; i += 1) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  return -1;
}

type Case = [number[], number[]];

export default function () {
  ([
    [[1, 2, 3, 1], [2]],
    [[1, 2, 1, 3, 5, 6, 4], [1, 5]],
  ] as Case[]).forEach(([arr, expect]) => {
    const ret = findPeakElement(arr);
    console.info(expect.includes(ret));
  });
}
