pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
    let len = numbers.len();
    for step in 1..len {
        let mut i = 0;
        while i + step < len {
            if numbers[i] + numbers[i + step] == target {
                return vec![(i + 1) as i32, (i + step + 1) as i32];
            }
            i += 1;
        }
    }
    vec![]
}
