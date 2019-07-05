use std::cmp::Ordering;

#[derive(Eq, Debug)]
struct Person {
    pub name: &'static str,
    pub age: isize,
}

impl Person {
    pub fn new(name: &'static str, age: isize) -> Person {
        Person { name, age }
    }

    pub fn hi(&self) {
        println!("Hello, I am {}, {} years old", &self.name, &self.age);
    }
}

impl Ord for Person {
    fn cmp(&self, other: &Self) -> Ordering {
        self.age.cmp(&other.age)
    }
}

impl PartialOrd for Person {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl PartialEq for Person {
    fn eq(&self, other: &Self) -> bool {
        self.age == other.age
    }
}

fn main() {
    println!("this is test");
    let mut arr = vec![2, 1, 3, 4, 5];
    let ages: Vec<isize> = vec![11, 10, 13, 8, 15];
    // let mut persons: Vec[Person] =
    let person: Person = Person::new("Trump", 12);
    let mut sons: Vec<Person> = ages
        .iter()
        .map(|item| { Person::new("Fucker", *item) })
        .collect();

    person.hi();
    println!("================");
    showSons(&sons);
    sons.sort();
    sons.iter().for_each(|son| {
        son.hi();
    });
    println!("{:?}", &arr);

    let t = arr[0];
    arr[0] = arr[1];
    arr[1] = t;
    println!("{:?}", &arr);
    showSons(&sons);
}


fn showSons(persons: &Vec<Person>) {
    println!("There {} persons here", persons.len());
    let len = persons.len();
    let middle_pos = len / 2;
    println!("middle is {}", middle_pos);
    let person = &persons[middle_pos];
    println!("The person at middle is {:?}", &person);
}
