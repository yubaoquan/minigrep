use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug)]
pub struct MyLinkedList {
    pub val: i32,
    pub next: Option<Rc<RefCell<MyLinkedList>>>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyLinkedList {

    /** Initialize your data structure here. */
    fn new() -> Self {
        MyLinkedList { val: 0, next: None }
    }

    fn new_v(val: i32) -> Self {
        MyLinkedList { val, next: None }
    }

    /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
    fn get(&self, index: i32) -> i32 {
        let mut cur = self;
        let mut next_borrow;
        for _ in 0..index {
            if let Some(next) = &cur.next {
                next_borrow = next.borrow();
                cur = &next_borrow;
            } else {
                return -1;
            }
        }
        return cur.val
    }

    /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    fn add_at_head(&self, val: i32) {
        let mut head = MyLinkedList::new_v(val);
        head.next = Some(Rc::new(RefCell::new(*self)));
    }

    /** Append a node of value val to the last element of the linked list. */
    fn add_at_tail(&self, val: i32) {
        let mut cur = self;
        while cur.next.is_some() {
            if let Some(next) = cur.next {
                cur = &next.borrow();
            }
        }
        cur.next = Some(Rc::new(RefCell::new(MyLinkedList::new_v(val))))
    }

    /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
    fn add_at_index(&self, index: i32, val: i32) {
        let mut cur = self;
        for _ in 0..index {
            if let Some(next) = cur.next {
                cur = &next.borrow();
            } else {
                return;
            }
        }
        let mut node = MyLinkedList::new_v(val);
        node.next = cur.next;
        cur.next = Some(Rc::new(RefCell::new(node)))
    }

    /** Delete the index-th node in the linked list, if the index is valid. */
    fn delete_at_index(&self, index: i32) {
        let mut cur = self;
        for _ in 0..index - 1 {
            if let Some(next) = cur.next {
                cur = &next.borrow();
            } else {
                return;
            }
        }

        if let Some(next) = cur.next {
            let next = next.borrow();
            if let Some(_) = next.next {
                cur.next = next.next;
            } else {
                cur.next = None;
            }
        }
    }

    fn display(&self) {
        let cur = self;
        let mut result = vec![];
        result.push(cur.val);
        while cur.next.is_some() {
            if let Some(next) = cur.next {
                let next = next.borrow();
                result.push(next.val);
            }
        }
        println!("{:?}", result);
    }
}

pub fn test() {

    // Your MyLinkedList object will be instantiated and called as such:
    let obj = MyLinkedList::new();
    let ret_1: i32 = obj.get(1);
    println!("{:?}", ret_1);

    obj.add_at_head(2);
    obj.display();
    obj.add_at_tail(3);
    obj.display();
    obj.add_at_index(1, 2);
    obj.display();
    obj.delete_at_index(1);
    obj.display();
}
