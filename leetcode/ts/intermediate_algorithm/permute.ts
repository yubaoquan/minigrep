// 全排列
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvqup5/

function permute(nums: number[]): number[][] {
  const ret: number[][] = [[]];

  while (ret[0].length < nums.length) {
    const cur = ret.shift()!;
    nums.forEach((num) => {
      if (!cur.includes(num)) ret.push([...cur, num]);
    });
  }
  return ret;
}

export default () => {
  const ret = permute([1, 2, 3]);
  console.info(ret);
};
