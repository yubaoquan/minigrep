// https://stackoverflow.com/questions/29901415/reversing-the-result-of-str-split
// https://doc.rust-lang.org/book/ch19-04-advanced-types.html#dynamically-sized-types-and-the-sized-trait
/// 反转字符串的单词顺序
/// 如 "this is a big apple" 转成 "apple big a is this"
pub fn reverse_words(s: String) -> String {
    s
        .split(" ")
        .filter(|&w| w.len() > 0)
        .collect::<Vec<&str>>()
        .iter()
        .rev()
        .map(|&w| w)
        .collect::<Vec<&str>>()
        .join(" ")
}

/// 根据字符串中的空格分割, 生成一个字符串数组
/// 如 "this is a big apple" 转成 ["this", "is", "a", "big", "apple"]
pub fn get_string_array_from_str(s: &String) -> Vec<String> {
    s
        .split(" ")
        .filter(|w| w.len() > 0)
        .map(|w| w.to_string())
        .collect::<Vec<String>>()
}

pub fn get_string_array_from_str_2(s: &String) -> Vec<String> {
    s
        .split(" ")
        .filter_map(|w| {
            if  w.len() > 0 {
                Some(w.to_string())
            } else {
                None
            }
        })
        .collect::<Vec<String>>()
}

pub fn get_string_array_from_str_3(s: &String) -> Vec<String> {
    s
        .split(" ")
        .filter_map(|w| {
            match w.len() {
                0 => None,
                _ => Some(w.to_string()),
            }
        })
        .collect::<Vec<String>>()
}
