// 逃离游乐园 麻将

export default function() {
  const arr = [1, 9, 6, 7, 4, 8, 2, 3, 5];
  const result = solve(arr, 4);
  console.info(result);
}

type OneStepRecord = [number[], string[]]; // 走到某步为止的交互记录 [当前数组, 交换记录]

function solve(arr: number[], maxSteps: number): string[] {
  if (isSorted(arr)) return [];

  const ret: OneStepRecord[] = [[arr, []]];
  let count = 0;
  let count2 = 0;
  const visited: Record<string, boolean> = {};
  const display = (array: number[]) => console.info(array.join(', '));

  while (ret.length && count < 100000) {
    const [curArr, swaps] = ret.shift()!;
    if (swaps.length > maxSteps) return [];

    if (isSorted(curArr)) {
      display(curArr);
      console.info(count);
      return swaps;
    }

    const canSwap = (i: number, j: number, id: string) =>
      swaps.length < maxSteps && swaps[swaps.length - 1] !== `${i}-${j}` && !visited[id];

    for (let i = 0; i < curArr.length - 1; i++) {
      for (let j = i + 1; j < curArr.length; j++) {
        const swapped = swap(curArr, i, j);
        const id = swapped.join(',');
        if (canSwap(i, j, id)) {
          count2 += 1;
          if (count2 % 1000 === 0) console.info(count2);
          visited[id] = true;
          ret.push([swapped, [...swaps, `${i}-${j}`]]); // [arr, swaps]
        }
      }
    }
    console.info('ret size: ', ret.length);
    count += 1;
  }

  return [];
}

function isSorted(arr: number[]): boolean {
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) if (arr[i] - arr[i + 1] !== -1) counter += 1;

  return counter <= 1;
}

function swap(arr: number[], i: number, j: number): number[] {
  const ret = [...arr];
  ret[i] = arr[j];
  ret[j] = arr[i];
  return ret;
}
