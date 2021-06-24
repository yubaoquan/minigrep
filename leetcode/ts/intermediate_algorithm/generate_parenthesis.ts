// 括号生成
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv33m7/

import { arrEqIgnoreOrder } from '../util/array.ts';

function generateParenthesis(n: number): string[] {
  const ret: string[] = [''];
  const finalLength = 2 * n;
  const memo: Record<string, boolean> = {};

  while (ret[0].length < finalLength) {
    const cur = ret.shift()!;
    for (let i = 0; i <= cur.length; i += 1) {
      const newItem = `${cur.slice(0, i)}()${cur.slice(i)}`;
      if (memo[newItem]) continue;
      memo[newItem] = true;
      ret.push(newItem);
    }
  }

  return ret;
}

export default function () {
  const expect = [
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()',
  ];

  console.info(arrEqIgnoreOrder(generateParenthesis(3), expect));
}
