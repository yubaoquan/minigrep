// https://stackoverflow.com/questions/29901415/reversing-the-result-of-str-split

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


pub fn get_string_array_from_str(s: &String) -> Vec<String> {
    s
        .split(" ")
        .filter(|&w| w.len() > 0)
        .collect::<Vec<&str>>()
        .iter()
        .map(|&w| w.to_string())
        .collect::<Vec<String>>()
}
