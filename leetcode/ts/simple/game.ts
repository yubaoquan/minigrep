export default function() {
  const result = solve([1, 9, 6, 7, 4, 8, 2, 3, 5], 4);
  console.info(result);
}

type Swap = [number, number]; // 交互位置
type OneStepRecord = [number[], Swap[]]; // 走到某步为止的交互记录

function solve(arr: number[], maxSteps: number): number[][] {
  if (isSorted(arr)) return [];

  const ret: OneStepRecord[] = [[arr, []]];
  let steps = maxSteps;

  while (steps) {
    const [curArr, swaps] = ret.shift()!;
    if (isSorted(curArr)) return swaps;

    for (let i = 0; i < curArr.length - 1; i++) {
      for (let j = i + 1; j < curArr.length; j++) {
        if (isSwapable(curArr, i, j)) {
          ret.push([swap(curArr, i, j), [...swaps, [i, j]]]); // [arr, swaps]
        }
      }
    }

    steps -= 1;
  }

  return [];
}

function isSorted(arr: number[]): boolean {
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) if (arr[i] > arr[i + 1]) counter += 1;

  return counter <= 1;
}

function isSwapable(arr: number[], i: number, j: number): boolean {
  return arr[i] + 1 !== arr[j];
}

function swap(arr: number[], i: number, j: number): number[] {
  const ret = [...arr];
  ret[i] = arr[j];
  ret[j] = arr[i];
  return ret;
}
