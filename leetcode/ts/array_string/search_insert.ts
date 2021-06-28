/**
 * 搜索插入位置
 * https://leetcode-cn.com/leetbook/read/array-and-string/cxqdh/
 */

function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i += 1) if (nums[i] >= target) return i;

  return nums.length;
}

type Case = [number[], number];

export default () => {
  ([
    [[1, 3, 5, 6], 5],
    [[1, 3, 5, 6], 2],
    [[1, 3, 5, 6], 7],
    [[1, 3, 5, 6], 0],
  ] as Case[]).forEach(([arr, num]) => {
    const ret = searchInsert(arr, num);
    console.info(ret);
  });
};
