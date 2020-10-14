function arrEq<T>(nums1: T[], nums2: T[]): boolean {
  if (nums1.length !== nums2.length) return false;
  return nums1.every((t, i) => t === nums2[i]);
}

function arrEqIgnoreOrder<T>(nums1: T[], nums2: T[]): boolean {
  return arrEq(nums1.sort(), nums2.sort());
}

export {
  arrEq,
  arrEqIgnoreOrder,
};
