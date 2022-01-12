/**
 * https://leetcode-cn.com/problems/first-bad-version/
 */

export const solution =
  (isBadVersion: any) =>
  (n: number): number => {
    let left = 0;
    let right = n;

    while (left < right) {
      const mid = left + Math.ceil((right - left) / 2);

      if (isBadVersion(mid)) {
        right = mid - 1;
        if (!isBadVersion(right)) return mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };

const genSolution = (n: number) => solution((m: number) => m >= n);

type Case = [number, number]; // total, bad, expect

const test = () => {
  (
    [
      [4, 4],
      [2, 1],
      [5, 4],
      [1, 1],
      [4, 1],
    ] as Case[]
  ).forEach(([total, bad]) => {
    const fn = genSolution(bad);
    const actual = fn(total);
    console.info(actual === bad);
  });
};

test();
