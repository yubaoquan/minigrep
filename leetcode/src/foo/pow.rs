pub fn my_pow(x: f64, n: i32) -> f64 {
    x.powf(n as f64)
}

pub fn test() {
    println!("{}", my_pow(2.0000, 10));
}
