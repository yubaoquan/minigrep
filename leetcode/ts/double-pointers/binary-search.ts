/**
 * 二分查找系列
 */

/**
 * 二分查找指定元素索引
 */
export const binarySearch = (nums: number[], target: number) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] === target) return mid;
  }

  return -1;
};

/**
 * 二分查找左边界
 */
export const leftBound = (nums: number[], target: number) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] === target) right = mid - 1;
  }

  return left >= nums.length || nums[left] !== target ? -1 : left;
};

/**
 * 二分查找有边界
 */

export const rightBound = (nums: number[], target: number) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] === target) left = mid + 1;
  }

  return right > nums.length || nums[right] !== target ? -1 : right;
};
