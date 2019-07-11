pub fn foo() {
    let s2: String = String::from("abc");
    let s3 = &s2; // &str
    let s4 = &s3; // &&str
    let s5 = &s4; // &&&str
    println!("{}, {}, {}, {}", s2, s3, s4, s5);
    // output: abc, abc, abc, abc
}
