// https://stackoverflow.com/questions/29901415/reversing-the-result-of-str-split
// https://doc.rust-lang.org/book/ch19-04-advanced-types.html#dynamically-sized-types-and-the-sized-trait
/// 反转字符串的单词顺序
/// 如 "this is a big apple" 转成 "apple big a is this"
pub fn reverse_words(s: String) -> String {
    s
        .rsplit(" ")
        .filter(|w| !w.is_empty())
        .collect::<Vec<&str>>()
        .join(" ")
}

/// 输入: "Let's take LeetCode contest"
/// 输出: "s'teL ekat edoCteeL tsetnoc"
pub fn reverse_words2(s: String) -> String {
    let str_arr = get_string_array_from_str_3(&s);
    str_arr
        .iter()
        .map(|s| {
            s
                .rsplit("")
                .collect::<Vec<&str>>()
                .join("")
        })
        .collect::<Vec<String>>()
        .join(" ")
}

/// 根据字符串中的空格分割, 生成一个字符串数组
/// 如 "this is a big apple" 转成 ["this", "is", "a", "big", "apple"]
pub fn get_string_array_from_str(s: &String) -> Vec<String> {
    s
        .split(" ")
        .filter(|w| !w.is_empty())
        .map(|w| w.to_string())
        .collect::<Vec<String>>()
}

pub fn get_string_array_from_str_2(s: &String) -> Vec<String> {
    s
        .split(" ")
        .filter_map(|w| {
            if  !w.is_empty() {
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
            match w.is_empty() {
                true => None,
                false => Some(w.to_string()),
            }
        })
        .collect::<Vec<String>>()
}
