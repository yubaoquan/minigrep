// 逃离游乐园 三个转盘转数字的游戏
// 失败. 数据量太大, 算法写的不行

import { debug } from '../util/debug.ts';

type PlateGroup = [string, string, string];
type RotateHistory = string[];
type TRecord = [PlateGroup, RotateHistory];

const rotateRecords: Record<string, string> = {};

// 旋转转盘
function rotate(str: string, time = 1) {
  const key = `${str}-${time}`;
  if (rotateRecords[key]) return rotateRecords[key];

  const arr = str.split('');
  const timeNeed = time % arr.length;
  const ret: string[] = [];

  for (let i = timeNeed; i < arr.length; i += 1) {
    ret.push(arr[i]);
  }
  for (let i = 0; i < timeNeed; i += 1) {
    ret.push(arr[i]);
  }

  rotateRecords[key] = ret.join('');
  return rotateRecords[key];
}

// 旋转第一个转盘
function rotate1(str1: string, str2: string, str3: string, time: number) {
  const str = rotate(str1, time);

  // 影响第二个转盘
  const array = str2.split('');
  array[2] = str[6];
  array[14] = str[10];

  return [str, array.join(''), str3];
}

// 旋转第二个转盘
function rotate2(str1: string, str2: string, str3: string, time: number) {
  const str = rotate(str2, time);

  // 影响第一个转盘
  const arr1 = str1.split('');
  arr1[6] = str[2];
  arr1[10] = str[14];

  // 影响第三个转盘
  const arr3 = str3.split('');
  arr3[2] = str[6];
  arr3[14] = str[10];

  return [arr1.join(''), str, arr3.join('')];
}

// 旋转第三个转盘
function rotate3(str1: string, str2: string, str3: string, time: number) {
  const str = rotate(str3, time);

  // 影响第二个转盘
  const array = str2.split('');
  array[6] = str[2];
  array[10] = str[14];

  return [str1, array.join(''), str];
}

const rotateOperations = [rotate1, rotate2, rotate3];

// 转盘的颜色全部对齐
function isDone(str1: string, str2: string, str3: string): boolean {
  const arr1Done = str1 === 'rrrrrrrrrrrrrrrr';
  const arr2Done = str2 === 'yyryyybyyybyyyry';
  const arr3Done = str3 === 'bbbbbbbbbbbbbbbb';

  return arr1Done && arr2Done && arr3Done;
}

function getId(str1: string, str2: string, str3: string): string {
  return `${str1}-${str2}-${str3}`;
}

function solve(arr1: string, arr2: string, arr3: string): string[] {
  const q: TRecord[] = [[[arr1, arr2, arr3], []]];
  const visited: Record<string, boolean> = {};
  const displayedHistory: Record<string, boolean> = {};
  const displayHistory = (id: string) => {
    displayedHistory[id] = true;
    console.info(id);
  };

  let counter = 0;

  while (q.length && counter < 100000) {
    const [[p1, p2, p3], history] = q.shift()!;
    if (debug(isDone(p1, p2, p3), false)) return history;

    for (let i = 0; i < rotateOperations.length; i += 1) {
      for (let j = 1; j < 16; j += 1) {
        const [new1, new2, new3] = rotateOperations[i](p1, p2, p3, j);
        const id = getId(new1, new2, new3);
        if (!visited[id]) {
          visited[id] = true;
          const historyId = history.join(', ');
          if (!displayedHistory[historyId]) displayHistory(historyId);
          q.push([[new1, new2, new3], [...history, `${i}-${j}`]]);
        }
      }
    }

    counter += 1;
  }

  return [];
}

export default function () {
  const result = solve(
    'bbyyrybbbryybrbr',
    'yrbyyrbbrrbrbryr',
    'rbbrbyyrbrbyrbby',
  );

  console.info(result);

  // const arr = '1234567890';
  // for (let i = 0; i < 10; i+=1) {
  //   console.info(rotate(arr, i));
  // }
}
