use std::convert::TryInto;

pub fn dominant_index(arr: Vec<i32>) -> i32 {
    let mut max = arr[0];
    let mut max_index: i32 = 0;
    let len = arr.len();
    if len < 1 {
        return -1;
    }
    if len < 2 {
        return 0;
    }

    let mut second_max = arr[1];
    // println!("{}, {}", max, second_max);


    if second_max > max {
        let t = max;
        max = second_max;
        second_max = t;
        max_index = 1;
    }
    // println!("{}, {}", max, second_max);


    for (index, item) in arr.iter().enumerate() {
        println!("{}, {}, {}", max, second_max, item);
        if item > &max {
            second_max = max;
            max = *item;
            max_index = index.try_into().unwrap();
        } else if item < &max && item > &second_max {
            second_max = *item
        }
    }

    println!("{}, {}", max, second_max);

    if second_max == 0 {
        return max_index;
    }

    return if max / second_max >= 2 {
        max_index
    } else {
        -1
    }
}

fn main() {
    let arr: Vec<i32> = vec![0, 0, 2, 3];
    let result = dominant_index(arr);
    // let result = 3 / 2;
    println!("result: {}", result);
}
