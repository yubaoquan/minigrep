// 电话号码的字母组合
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv8ka1/

import { arrEqIgnoreOrder } from '../util/array.ts';

function letterCombinations(digits: string): string[] {
  if (!digits) return [];

  const letterMap: Record<number, string[]> = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const digitsArr = digits.split('');
  const ret = [''];
  let index = 0;

  while (ret[0].length < digits.length) {
    const curStr = ret.shift();
    letterMap[+digitsArr[index]].forEach((char) => ret.push(curStr + char));
    index = ret[0].length;
  }

  return ret;
}

type Case = [string, string[]];

export default function () {
  ([
    ['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']],
  ] as Case[]).forEach(([str, expect]) => {
    const ret = letterCombinations(str);
    console.info(arrEqIgnoreOrder(ret, expect));
  });
}
