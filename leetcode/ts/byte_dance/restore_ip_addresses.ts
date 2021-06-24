// 复原IP地址
// https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1044/

import { arrEqIgnoreOrder } from '../util/array.ts';

/**
 * 切点是否合法: 不应该切出超过三位的数
 * @param cutPoints 切点数组
 */
function isValidCut(cutPoints: number[]): boolean {
  if (cutPoints[0] > 3) return false;
  for (let i = 0; i < cutPoints.length; i += 1) {
    if (cutPoints[i + 1] - cutPoints[i] > 3) return false;
  }
  return true;
}

/**
 * 根据切点生成 IP
 * @param numsStr 只包含数字的字符串
 * @param cutPoints 切点
 */
function getIp(numsStr: string, cutPoints: number[]): string {
  const ret = numsStr.split('');
  for (let i = cutPoints.length - 1; i >= 0; i -= 1) {
    ret.splice(cutPoints[i], 0, '.');
  }
  return ret.join('');
}

/**
 * ip 格式是否合法
 * @param ip
 */
function isValidIp(ip: string): boolean {
  const parts = ip.split('.');
  return parts.length === 4 && parts.every((part) => {
    if (part.length > 1 && part[0] === '0') return false;
    const n = +part;
    return n >= 0 && n <= 255;
  });
}

/**
 * 列表中取 n 个元素的全组合
 * @param collection 列表
 * @param n 取多少个元素
 */
function combination<T>(collection: T[], n: number): T[][] {
  // eslint-disable-next-line no-bitwise
  const max: number = 1 << collection.length;
  const res: T[][] = [];

  for (let i = 0; i < max; i += 1) {
    const picked: T[] = [];
    for (let j = 0; j < collection.length; j += 1) {
      // eslint-disable-next-line no-bitwise
      if (i & (1 << j)) {
        picked.push(collection[j]);
        if (picked.length > n) break;
      }
    }
    if (picked.length === n) res.push(picked);
  }

  return res;
}

function restoreIpAddresses(s: string): string[] {
  if (s.length < 4) return [];
  const cutPoints: number[] = new Array(s.length - 1).fill(0).map((t, i) => i + 1);

  return combination(cutPoints, 3)
    .filter((cutWay) => isValidCut(cutWay))
    .map((cutWay) => getIp(s, cutWay))
    .filter((ip) => isValidIp(ip));
}

export type Case = [string, string[]];

([
  ['', []],
  ['25525511135', ['255.255.11.135', '255.255.111.35']],
  ['0000', ['0.0.0.0']],
  ['1111', ['1.1.1.1']],
  ['010010', ['0.10.0.10', '0.100.1.0']],
  ['101023', ['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3']],
] as Case[]).forEach(([s, expect]) => {
  const actual = restoreIpAddresses(s);
  console.info(arrEqIgnoreOrder(expect, actual));
});
