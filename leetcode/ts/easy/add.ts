// 不用加号的加法
// https://leetcode-cn.com/problems/add-without-plus-lcci/
// https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/

function plus(a: number, b: number): number {
  const big = a > b ? a : b;
  const small = a > b ? b : a;
  const bitBig = big.toString(2);
  let bitSmall = small.toString(2);
  const len = bitBig.length;
  const arr = new Array(len);
  while (bitSmall.length < len) bitSmall = `0${bitSmall}`;

  let add1 = false; // 进位
  for (let i = len - 1; i >= 0; i -= 1) {
    const [b1, b2] = [+bitBig[i] || 0, +bitSmall[i] || 0];

    if (b1 && b2) { // 两个1
      arr[i] = add1 ? '1' : '0';
      add1 = true;
    } else if (!b1 && !b2) { // 两个0
      arr[i] = add1 ? '1' : '0';
      add1 = false;
    } else { // 一个1, 一个0
      arr[i] = add1 ? '0' : '1';
    }
  }

  if (add1) arr.unshift('1');
  return parseInt(arr.join(''), 2);
}

function minus(a: number, b: number): number {
  const aStr = a.toString(2);
  const bStr = b.toString(2);

  const bitA = a > b ? aStr : bStr;
  let bitB = a > b ? bStr : aStr;

  const len = bitA.length;
  while (bitB.length < len) bitB = `0${bitB}`;
  const arr = new Array(len);

  let lend = false; // 借位
  for (let i = len - 1; i >= 0; i -= 1) {
    const [b1, b2] = [+bitA[i] || 0, +bitB[i] || 0];
    if (b1 === b2) {
      arr[i] = lend ? 1 : 0;
    } else if (b1 && !b2) {
      arr[i] = lend ? 0 : 1;
      lend = false;
    } else { // !b1 && b2
      arr[i] = lend ? 0 : 1;
      lend = true;
    }
  }

  return parseInt(arr.join(''), 2);
}

function add(a: number, b: number): number {
  // 同号
  if (a < 0 && b < 0) return -plus(-a, -b);
  if (a >= 0 && b >= 0) return plus(a, b);

  // 一正一负且负的绝对值大
  if (a > b && a < -b) return -minus(-b, a);
  if (b > a && b < -a) return -minus(-a, b);

  // 一正一负 且负的绝对值不大于正的绝对值
  return a > b ? minus(a, -b) : minus(b, -a);
}

type Case = number[];

export default function () {
  function show(a: number, b: number, expect: number, result: number) {
    if (expect !== result) {
      console.info('wrong');
      console.info(a, b, expect, result);
    }
  }

  for (let i = 0; i < 10; i += 1) {
    const a = Math.ceil(Math.random() * 100);
    const b = Math.ceil(Math.random() * 100);

    show(a, b, a + b, add(a, b));
    show(-a, -b, -a - b, add(-a, -b));
    show(-a, b, -a + b, add(-a, b));
    show(a, -b, a - b, add(a, -b));
  }

  ([
    [-40, 29, -11],
    [40, -29, 11],
    [11, 31, 42],
    [45, 61, 106],
    [-11, -31, -42],
    [100, 200, 300],
    [-100, -200, -300],
    [100, -200, -100],
    [-100, 200, 100],
    [79, -1251245734, -1251245655],
  ] as Case[]).forEach(([a, b, expect]) => {
    const result = add(a, b);
    show(a, b, expect, result);
  });
}
