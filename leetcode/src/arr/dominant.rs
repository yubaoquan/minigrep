
pub fn dominant_index(arr: Vec<i32>) -> i32 {
    let mut max = arr[0];
    let mut max_index: usize = 0;
    let len = arr.len();
    if len < 1 {
        return -1;
    }
    if len < 2 {
        return 0;
    }

    let mut second_max = arr[1];

    if second_max > max {
        let t = max;
        max = second_max;
        second_max = t;
        max_index = 1;
    }

    arr.iter().enumerate().for_each(|(index, item)| {
        let n = *item;
        if n > max {
            second_max = max;
            max = n;
            max_index = index;
        } else if n < max && n > second_max {
            second_max = n
        }
    });

    return if second_max == 0 {
        max_index as i32
    } else if max / second_max >= 2 {
        max_index as i32
    } else {
        -1
    }
}
