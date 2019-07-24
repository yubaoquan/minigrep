// https://www.zhihu.com/question/328066906

struct Person {
    name: String,
}

impl Person {
    #[inline]
    pub fn new(name: String) -> Self {
        Person { name }
    }

    pub fn get_name(&self) -> &str {
        &self.name
    }
}

pub fn test() {
    // error
    // temporary value dropped while borrowed
    // creates a temporary which is freed while still in use
    // let name = Person::new("abc".to_string()).get_name();

    // ok
    let person = Person::new("abc".to_string());
    let name = person.get_name();

    println!("{}", name);
}
