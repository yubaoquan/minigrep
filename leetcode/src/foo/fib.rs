/// [斐波那契数](https://leetcode-cn.com/explore/featured/card/recursion-i/258/memoization/1212/)
/// **斐波那契数**，通常用`F(n)`表示，形成的序列称为**斐波那契数列**。该数列由 `0` 和 `1` 开始，后面的每一项数字都是前面两项数字的和。也就是：
///
/// ```
/// F(0) = 0,   F(1) = 1
/// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
/// ```
///
/// 给定 `N`，计算 `F(N)`。
pub fn fib(n: i32) -> i32 {
    if n <= 1 {
        return n;
    }

    let mut first = 1;
    let mut second = 1;
    for _ in 3..=n {
        let third = first + second;
        first = second;
        second = third;
    }

    second
}

pub fn test() {
    vec![2, 3, 4].iter().for_each(|x| {
        println!("{}", fib(*x as i32));
    })
}
