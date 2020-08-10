function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) if (nums[i] >= target) return i;

  return nums.length;
}

export default function() {
  [
    [[1, 3, 5, 6], 5],
    [[1, 3, 5, 6], 2],
    [[1, 3, 5, 6], 7],
    [[1, 3, 5, 6], 0],
  ].forEach(([arr, num]:any) => {
    const ret = searchInsert(arr, num);
    console.info(ret);
  });
}
