use leetcode::arr::spiral_order::spiral_order;

fn main() {
    let arr: Vec<Vec<i32>> = vec![
        vec![ 1, 2, 3 ],
        vec![ 4, 5, 6 ],
        vec![ 7, 8, 9 ],
    ];
    let result = spiral_order(arr);
    println!("result: {:?}", &result);
}
