pub fn add_binary(a: String, b: String) -> String {
    let max: Vec<i32>;
    let mut min: Vec<i32>;
    let a_len = a.len();
    let b_len = b.len();
    let pad_num = (a_len as i32 - b_len as i32).abs();

    let len = if a_len > b_len {
        min = str_to_num_vec(b);
        max = str_to_num_vec(a);
        a_len
    } else {
        min = str_to_num_vec(a);
        max = str_to_num_vec(b);
        b_len
    };
    for _ in 0..pad_num {
        min.insert(0, 0);
    }

    let mut result = vec![0; len];
    let mut extra_one = false;

    for i in (0..len).rev() {
        let mut sum = min[i] + max[i] + result[i];
        if extra_one {
            sum += 1;
        }
        extra_one = sum > 1;
        result[i] = sum % 2;
    }
    if extra_one {
        result.insert(0, 1);
    }
    result.into_iter().map(|n| n.to_string()).collect()
}

fn str_to_num_vec(a: String) -> Vec<i32> {
    a
        .split("")
        .filter(|s| *s != "")
        .map(|s| s.parse::<i32>().unwrap())
        .collect()
}
