pub fn max_sub_array(nums: Vec<i32>) -> i32 {
    let mut max: i32 = std::i32::MIN;
    let mut cur: i32 = 0;
    for n in nums {
        cur += n;
        if cur > max {
            max = cur;
        }
        cur = if cur <= 0 {
            0
        } else {
            cur
        };
    }

    max
}
