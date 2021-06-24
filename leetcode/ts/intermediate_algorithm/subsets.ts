// 子集
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv67o6/

function subsets(nums: number[]): number[][] {
  if (!nums.length) return [];
  const ret: number[][] = [[]];
  nums.forEach((t) => ret.push([t]));

  let start = 1;
  let { length } = nums;
  const memo: Record<string, boolean> = {};

  while (ret[ret.length - 1].length < nums.length) {
    for (let i = start; i < length; i += 1) {
      const currentNums = ret[i];
      const pushableNums = nums.filter((t) => !currentNums.includes(t));

      for (let j = 0; j < pushableNums.length; j += 1) {
        const newItem = [...currentNums, pushableNums[j]].sort();
        const key = newItem.join(',');
        if (!memo[key]) {
          ret.push(newItem);
        }
        memo[key] = true;
        if (newItem.length === nums.length) return ret;
      }
    }
    start = length + 1;
    ({ length } = ret);
  }

  return ret;
}

export default function () {
  const ret1 = subsets([1, 9, 8, 3, -1, 0]);
  console.info(ret1);
  console.info(ret1.length);
  console.info(subsets([3, 2, 4, 1]));
  console.info(subsets([1, 2, 3]));
}
