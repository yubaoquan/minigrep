/**
 * 有效的完全平方数
 * https://leetcode-cn.com/problems/valid-perfect-square/
 */

function isPerfectSquare(num: number): boolean {
  const digits = num.toString().length;
  const halfDigits = digits % 2 === 0 ? digits / 2 : (digits + 1) / 2;
  const half = num % 2 === 0 ? num / 2 : (num + 1) / 2;

  for (let i = 10 ** (halfDigits - 1); i <= half; i++) {
    const square = i ** 2;
    if (square === num) return true;
    if (square > num) return false;
  }
  return false;
}

// https://leetcode-cn.com/problems/valid-perfect-square/solution/zhi-xing-yong-shi-0-ms-zai-suo-you-c-ti-jiao-zh-44/
export function isPerfectSquare2(num: number): boolean {
  let t = 1;
  while (num > 0) {
    num -= t;
    t += 2;
  }
  return num === 0;
}

type Case = [number, boolean];

([
  [4, true],
  [16, true],
  [1, true],
  [5, false],
  [100, true],
  [17, false],
] as Case[]).forEach(([num, expect]) => {
  const actual = isPerfectSquare(num);
  console.info(num, actual === expect);
});
