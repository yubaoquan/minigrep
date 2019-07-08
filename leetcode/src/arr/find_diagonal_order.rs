use std::convert::TryInto;

/// 之字形遍历矩阵
///
/// 输入:
/// ```
/// let arr: Vec<Vec<i32>> = vec![
///     vec![ 1, 2, 3 ],
///     vec![ 4, 5, 6 ],
///     vec![ 7, 8, 9 ],
/// ];
/// ```
/// 输出:  [1, 2, 4, 7, 5, 3, 6, 8, 9]
///
/// 思路: 设置两个坐标, 分别在第一行和第一列上移动, 代表对角线的起止位置, 两个坐标分别向右向下移动(一个向右移动, 一个向下移动), 每移动一步,
/// 产生一个新的对角线, 添加到结果数组中
pub fn find_diagonal_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
    let mut result: Vec<i32> = vec![];
    if matrix.len() == 0 || matrix[0].len() == 0 {
        return result;
    }
    let mut is_up = true;
    let mut row_pos: (i32, i32) = (0, 0);
    let mut col_pos: (i32, i32) = (0, 0);
    let row_end: i32 = (matrix.len() - 1).try_into().unwrap();
    let col_end: i32 = (matrix[0].len() - 1).try_into().unwrap();

    while row_pos.0 != row_end || row_pos.1 != col_end{
        let line = print_line(&matrix, row_pos, col_pos, is_up);
        result.extend_from_slice(&line);
        is_up = !is_up;
        if row_pos.1 == col_end {
            row_pos.0 += 1;
        } else {
            row_pos.1 += 1;
        }
        if col_pos.0 == row_end {
            col_pos.1 += 1;
        } else {
            col_pos.0 += 1;
        }
    }
    result.push(matrix[row_end as usize][col_end as usize]);
    result
}

fn print_line(
    matrix: &Vec<Vec<i32>>,
    row_pos: (i32, i32),
    col_pos: (i32, i32),
    is_up: bool,
) -> Vec<i32> {
    let mut result: Vec<i32> = vec![];
    let mut pos: (i32, i32);

    if is_up {
        pos = (col_pos.0, col_pos.1);
        while pos.1 <= row_pos.1 {
            result.push(matrix[pos.0 as usize][pos.1 as usize]);
            pos.0 -= 1;
            pos.1 += 1;
        }
    } else {
        pos = (row_pos.0, row_pos.1);
        while pos.1 >= col_pos.1 {
            result.push(matrix[pos.0 as usize][pos.1 as usize]);
            pos.0 += 1;
            pos.1 -= 1;
        }
    }
    result
}
