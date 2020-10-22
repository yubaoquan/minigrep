function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    const end = i + k < nums.length - 1 ? i + k : nums.length - 1;
    for (let j = i + 1; j <= end; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}

export type Case = [number[], number, boolean];

([
  [[1, 2, 3, 1, 2, 3], 2, false],
  [[99, 99], 2, true],
  [[1, 2, 3, 1], 3, true],
  [[1, 0, 1, 1], 1, true],

] as Case[]).forEach(([nums, k, expect]) => {
  const actual = containsNearbyDuplicate(nums, k);
  console.info(expect === actual);
});
