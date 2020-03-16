function climbStairs(n) {
  if (n <= 3) return n;
  const arr = [2, 3];
  for (let i = 4; i < n; i++) {
    const t = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = t;
  }
  return arr[1];
}

console.info(climbStairs(4));
