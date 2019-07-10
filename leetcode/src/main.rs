use leetcode::string::reverse_words::reverse_words;


fn main() {
    let _arr = vec![2,3,1,2,4,3];
    let str = String::from("  the sky  is    blue");
    let result = reverse_words(str);
    println!("{:?}", result);
}
