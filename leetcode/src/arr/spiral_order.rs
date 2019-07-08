/// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
/// 输入:
/// ```
/// [
///      [ 1, 2, 3 ],
///      [ 4, 5, 6 ],
///      [ 7, 8, 9 ]
/// ]
/// ```
/// 输出: [1, 2, 3, 6, 9, 8, 7, 4, 5]
pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
    let mut result: Vec<i32> = vec![];
    let m = matrix.len();
    if m == 0 {
        return vec![];
    }
    let n = matrix[0].len();
    if n == 0 {
        return vec![];
    }
    let total = m * n;
    let mut direction = "r";
    let mut x = 0;
    let mut y = 0;
    let mut count = 0;
    let mut w = n;
    let mut h = m - 1;
    for _i in 0..total {
        result.push(matrix[y][x]);
        count += 1;
        match direction {
            "r" => {
                if count == w {
                    direction = "d";
                    w -= 1;
                    count = 0;
                    y += 1;
                } else {
                    x += 1;
                }
            },
            "d" => {
                if count == h {
                    direction = "l";
                    h -= 1;
                    count = 0;
                    x -= 1;
                } else {
                    y += 1;
                }
            },
            "l" => {
                if count == w {
                    direction = "u";
                    count = 0;
                    w -= 1;
                    y -= 1;
                } else {
                    x -= 1;
                }
            },
            "u" => {
                if count == h {
                    direction = "r";
                    count = 0;
                    h -= 1;
                    x += 1;
                } else {
                    y -= 1;
                }
            },
            _ => {
                eprintln!("error direction: {}", direction);
            },
        }
    }
    result
}
