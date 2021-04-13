// 格雷码 错误解法
function circularPermutation(n: number, start: number): number[] {
  const getIniArray = () => Array(2 ** n).fill(0).map((t, i) => i);
  let ret: number[] = getIniArray();
  const leftNumbers = [...ret];

  if (start !== 0) {
    ret[0] = start;
    ret[start] = 0;
  }

  const wrongResults: number[][] = [];

  let isWrong = true;
  let tryTimes = 0;

  while (isWrong) {
    if (tryTimes > 10000) {
      console.info('Tried too many times');
      return ret;
    }
    for (let i = 1; i < ret.length; i++) {
      const index = getMatchNumber(
        leftNumbers,
        ret[i - 1],
        (t: number) => wrongResults.every(arr => arr[i] !== t),
      );

      if (index > -1) ret[i] = leftNumbers.splice(index, 1)[0];
      else {
        wrongResults.push(ret);
        ret = getIniArray();
        continue;
      }
    }

    isWrong = !isMatch(ret[0], ret[ret.length - 1]);
    if (isWrong) wrongResults.push(ret);
    tryTimes++;
  }

  return ret;
}

function getMatchNumber(arr: number[], t: number, checker: Function): number {
  return arr.findIndex(num => isMatch(num, t) && checker(num));
}

function isMatch(a: number, b: number): boolean {
  let str1 = a.toString(2);
  let str2 = b.toString(2);
  if (str1.length > str2.length) str2 = str2.padStart(str1.length, '0');
  else str1 = str1.padStart(str2.length, '0');
  let diffCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) diffCount++;
  }

  return diffCount === 1;
}

// console.info(circularPermutation(2, 3));
console.info(circularPermutation(3, 2));
