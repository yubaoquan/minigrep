pub fn array_pair_sum(nums: Vec<i32>) -> i32 {
    let mut arr = nums.clone();
    arr.sort();
    arr
        .into_iter()
        .enumerate()
        .fold(0, |acc, (index, item)| {
            if index % 2 == 0 {
                println!("{}", item);
                acc + item
            } else {
                acc
            }
        })
}
