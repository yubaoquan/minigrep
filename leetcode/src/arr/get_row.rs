pub fn get_row(row_index: i32) -> Vec<i32> {
    let mut last_row = vec![1];
    if row_index == 0 {
        return last_row;
    }

    let target_row: usize = row_index as usize;
    let mut result = vec![0; target_row + 1];

    for row_size in 1..target_row + 2 { // 第三行 [1, 3, 3, 1], 共四个元素, row_size = 4, 所以第一行到第三行每行的元素个数应该是1..5
        for i in 0..row_size {
            result[i] = if i == 0 || i == row_size - 1 {
                1
            } else {
                last_row[i - 1] + last_row[i]
            };
        }
        last_row = result.clone();
    }

    result
}
