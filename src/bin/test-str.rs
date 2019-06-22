/// 数组操作: forEach, map, reduce

fn main() {
    let str_arr = vec!["aa1a", "b1bb", "ccc"];

    // reduce
    let result = reduce(&str_arr);
    println!("reduce result: {}\n", result);

    // foreach
    for_each_ref(&str_arr);

    // filter and map
    let result = filter_map(str_arr);
    for_each(result);
}

fn reduce(str_arr: &Vec<&str>) -> String {
    str_arr.iter().fold(String::from(""), |acc, x| {
        format!("{}-{}", acc, x)
    })
}

/// 用于 &str
fn for_each_ref(str_arr: &Vec<&str>) {
    println!("loop in &str vector and printing each item");
    str_arr.iter().for_each(|item| {
        println!("{}", item);
    });
    println!("");
}

/// 用于 String
fn for_each(str_arr: Vec<String>) {
    str_arr.iter().for_each(|item| {
        println!("{}", &item);
    });
}

fn filter_map(str_arr: Vec<&str>) -> Vec<String> {
    println!("mapping");
    str_arr.iter()
        .filter(|item| item.contains("1"))
        .map(|item| {
            item.replace("1", "2")
        })
        .collect()
}
