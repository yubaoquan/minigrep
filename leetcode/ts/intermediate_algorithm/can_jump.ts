// 跳跃游戏
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvb8zs/

function canJump(nums: number[]): boolean {
  const canArrive: Record<number, boolean> = {};

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j <= nums[i]; j += 1) {
      canArrive[i + j] = true;
      if (i + j === nums.length - 1) return true;
    }
    if (!canArrive[i + 1]) return false;
  }
  return false;
}

type Case = [number[], boolean];

export default function () {
  ([
    [[2, 3, 1, 1, 4], true],
    [[3, 2, 1, 0, 4], false],
  ] as Case[]).forEach(([arr, expect]) => {
    const actual = canJump(arr);
    console.info(expect, actual);
  });
}
