// 基本计算器
// https://leetcode-cn.com/problems/basic-calculator/

function calculate(s: string): number {
  return helper(s.replace(/ /g, ''))[0];
}

/**
 *
 * @param s 表达式字符串
 * @param from 开始计算的位置
 * @returns [表达式运算结果, 下标需跳过的长度(从括号中返回时用)]
 */
function helper(s: string, from = 0): [number, number] {
  let num = 0;
  let index = from;
  let sign = '+';
  const stack: number[] = [];

  if (s[index] === '-') {
    index = 1;
    sign = '-';
  }

  while (index < s.length) {
    const c = s[index];
    const isDigit = c.match(/^\d$/);
    if (isDigit) num = (10 * num) + Number(c);
    if (c === '(') {
      let skipLen = 0;
      [num, skipLen] = helper(s, index + 1);
      index += skipLen;
    }
    if (!isDigit || index === s.length - 1) {
      if (sign === '+' || sign === ')') stack.unshift(num);
      if (sign === '-') stack.unshift(-num);
      if (sign === '*') stack[0] *= num;
      if (sign === '/') stack[0] = devide(stack[0], num);

      num = 0;
      sign = c;
    }
    if (c === ')') break;
    index += 1;
  }

  const sum = stack.reduce((total, cur) => total + cur, 0);
  return [sum, index - from + 1];
}

/**
 * 同号相除下取整, 否则上取整
 * @param a 被除数
 * @param b 除数
 */
function devide(a: number, b: number): number {
  if (a >= 0 && b > 0) return Math.floor(a / b);
  if (a <= 0 && b < 0) return Math.floor(a / b);
  return Math.ceil(a / b);
}

type Case = [string, number];

export default function() {
  ([
    ['14-3/2', 13],
    ['3/2', 1],
    ['3+2*2', 7],
    ['(1+(4+5+2)-3)+(6+8)', 23],
    ['1 + 1', 2],
    [' 2-1 + 2 ', 3],
    [' -1 + 2 ', 1],
  ] as Case[]).forEach(([expr, expect]) => {
    const actual = calculate(expr);
    console.info(expect, actual, expect === actual);
  });
}
