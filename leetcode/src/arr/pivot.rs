
pub fn pivot_index(nums: Vec<i32>) -> i32 {
    for i in 0..nums.len() {
        if sum(&nums, 0, i) == sum(&nums, i + 1, nums.len()) {
            return i as i32;
        }
    }
    -1 as i32
}

fn sum(nums: &Vec<i32>, start: usize, end: usize) -> i32 {
    let mut result: i32 = 0;
    for i in start..end {
        result = result + nums[i];
    }
    result
}
