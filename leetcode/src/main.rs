use leetcode::string::reverse_words::reverse_words;
use leetcode::string::reverse_words::get_string_array_from_str;


fn main() {
    let _arr = vec![2,3,1,2,4,3];
    let str = String::from("  the sky  is    blue");
    let result = reverse_words(str);
    println!("{:?}", result);

    let s = "this is the string hahaha".to_string();
    let string_array = get_string_array_from_str(&s);
    println!("{:?}", string_array);
}
