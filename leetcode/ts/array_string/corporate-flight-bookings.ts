/**
 * https://leetcode-cn.com/problems/corporate-flight-bookings/
 */
import { arrEq } from '../util/array.ts';

export function corpFlightBookings(bookings: number[][], n: number): number[] {
  const ret = Array(n).fill(0);
  const diff = Array(n).fill(0);
  bookings.forEach(([start, end, inc]) => {
    diff[start - 1] += inc;
    if (end < n) diff[end] -= inc;
  });

  ret[0] = diff[0];

  for (let i = 1; i < n; i += 1) {
    ret[i] = ret[i - 1] + diff[i];
  }

  console.info(ret);
  return ret;
}

const test = () => {
  const actual1 = corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5);
  const actual2 = corpFlightBookings([[1, 2, 10], [2, 2, 15]], 2);

  console.info(arrEq(actual1, [10, 55, 45, 25, 25]));
  console.info(arrEq(actual2, [10, 25]));
};

test();
