function arrEq(nums1: number[], nums2: number[]): boolean {
  if (nums1.length !== nums2.length) return false;
  return nums1.every((t, i) => t === nums2[i]);
}

export {
  arrEq,
};
