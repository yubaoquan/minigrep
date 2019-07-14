use std::collections::HashMap;

pub fn rob(nums: Vec<i32>) -> i32 {
    let mut scores: HashMap<usize, i32> = HashMap::new();
    if nums.len() == 0 {
        return 0;
    }
    foo(&nums, 0, &mut scores)
}


fn foo(nums: &Vec<i32>, i: usize, scores: &mut HashMap<usize, i32>) -> i32 {
    if let Some(result) = scores.get(&i) {
        return *result;
    }
    let result: i32;
    if i == nums.len() - 1 {
        result = nums[i];
    } else if i == nums.len() - 2 {
        result = std::cmp::max(nums[i], nums[i + 1]);
    } else {
        let result_i1 = foo(nums, i + 1, scores);
        let result_i2 = foo(nums, i + 2, scores);
        result = std::cmp::max(nums[i] + result_i2, result_i1);
    }
    scores.insert(i, result);
    result
}
