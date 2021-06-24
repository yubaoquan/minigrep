function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  for (let i = 0; i < nums.length; i += 1) {
    const end = i + k < nums.length - 1 ? i + k : nums.length - 1;
    for (let j = i + 1; j <= end; j += 1) {
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
    }
  }
  return false;
}

export type Case = [number[], number, number, boolean];

([
  [[1, 2, 3, 1], 3, 0, true],
  [[1, 0, 1, 1], 1, 2, true],
  [[1, 5, 9, 1, 5, 9], 2, 3, false],

] as Case[]).forEach(([nums, k, t, expect]) => {
  const actual = containsNearbyAlmostDuplicate(nums, k, t);
  console.info(expect === actual);
});
