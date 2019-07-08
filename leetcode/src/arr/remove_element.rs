pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
    let mut i = 0;
    while i < nums.len() {
        if nums[i] == val {
            nums.remove(i);
        } else {
            i += 1;
        }
    }
    nums.len() as i32
}


fn _foo(nums: &mut Vec<i32>, val: i32) -> i32 {
     // https://stackoverflow.com/questions/49727495/why-do-i-get-the-error-fromiteratorinteger-is-not-implemented-for-veci32
    let _xx = nums.iter().filter(|n| **n != val);
    nums
        .iter()
        .filter(|n| **n != val)
        .cloned()
        .collect::<Vec<i32>>()
        .len() as i32
}

/*
fn main() {
    let mut arr: Vec<i32> = vec![2, 3, 4];
    let result = remove_element(&mut arr, 3);
    println!("{:?}", result);
}
*/
