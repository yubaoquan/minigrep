use std::cmp;

// https://blog.csdn.net/qq_17550379/article/details/80540430
pub fn min_sub_array_len(s: i32, nums: Vec<i32>) -> i32 {
    let mut l = 0;
    let mut r = 0;
    let mut sum_all = 0;
    let len = nums.len();
    let mut min_length = len + 1;

    while l < len {
        if r < len && sum_all < s {
            sum_all += nums[r];
            r += 1;
        } else {
            sum_all -= nums[l];
            l += 1;
        }
        if sum_all >= s {
            min_length = cmp::min(min_length, r - l);
        }
    }

    if min_length == len + 1 { return 0; }
    return min_length as i32;
}
