#[derive(Debug)]
pub struct LinkedList {
    head: Option<Box<Node>>,
    tail: Option<*mut Node>,
}
#[derive(Debug)]
struct Node {
    value: i32,
    next: Option<Box<Node>>,
}

impl LinkedList {
    pub fn new() -> Self {
        LinkedList {
            head: None,
            tail: None,
        }
    }
    pub fn add_to_tail(&mut self, value: i32) {
        let mut new_tail = Box::new(Node { value, next: None });
        let raw_tail: *mut _ = &mut *new_tail;

        if self.tail.is_some() {
            unsafe { (*self.tail.unwrap()).next = Some(new_tail) };
        } else {
            self.head = Some(new_tail);
        }
        self.tail = Some(raw_tail);
    }
    pub fn remove_head(&mut self) -> Option<i32> {
        if let Some(head) = &mut self.head {
            let old_value = Some(head.value);
            let new_head = head.next.take();
            if new_head.is_none() {
                self.tail = None;
            };
            self.head = new_head;
            old_value
        } else {
            None
        }
    }


    pub fn contains(&mut self, target: i32) -> bool {
        let mut node = &self.head;
        while let Some(old_node) = node {
            match &mut node {
                Some(node) if node.value == target => return true,
                _ => (),
            }
            node = &old_node.next;
        }
        false
    }

    // pub fn add_at_index(&mut self, index: i32) {
    //     let mut node = &self.head;
    //     let mut i = 0;
    //     while let Some(old_node) = node{
    //         i += 1;
    //         match &mut node {
    //             Some(node) => {
    //                 if i == index {
    //                     let new_node = Box::new(Node { value: 999, next: node.next });
    //                     // let raw_node: *mut _ = &mut *new_node;
    //                     node.next = Some(new_node);
    //                     return;
    //                 }
    //             },
    //             _ => (),
    //         }
    //         node = &old_node.next;
    //     }
    // }
}

impl Drop for LinkedList {
    fn drop(&mut self) {
        let mut node = self.head.take();
        while let Some(mut next_node) = node {
            node = next_node.next.take()
        }
    }
}

fn main() {
    let mut list = LinkedList::new();
    for i in 0..250_000 {
        list.add_to_tail(i);
    }
    println!("{:?}", list.contains(200_000));
}


pub fn tests() {
    let mut list = LinkedList::new();
    assert!(list.tail.is_none());
    assert!(list.head.is_none());
    list.add_to_tail(1);
    list.add_to_tail(2);
    list.add_to_tail(3);
    list.add_to_tail(4);
    list.add_to_tail(5);
    println!("{:?}", list);

    // assert_eq!(list.head.as_mut().unwrap().value, 4);
    // assert_eq!(list.contains(5), true);
    // assert_eq!(list.contains(6), false);
    // assert_eq!(list.remove_head(), Some(4));
    // unsafe { assert_eq!((*list.tail.unwrap()).value, 5) };
    // assert_eq!(list.remove_head(), Some(5));
    // assert_eq!(list.remove_head(), None);
    // assert!(list.head.is_none());
    // assert!(list.tail.is_none());
}
