use leetcode::arr::remove_element::remove_element;


fn main() {
    let mut arr: Vec<i32> = vec![2, 3, 4];
    let result = remove_element(&mut arr, 3);
    println!("{:?}", result);
}
