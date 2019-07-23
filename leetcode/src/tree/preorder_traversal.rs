
use std::rc::Rc;
use std::cell::RefCell;
use crate::tree::def::TreeNode;

pub fn preorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut result = vec![];
    foo(root, &mut result);
    result
}

fn foo(root: Option<Rc<RefCell<TreeNode>>>, result: &mut Vec<i32>) {
    if let Some(node) = root {
        let node_borrow = node.borrow();
        result.push(node_borrow.val);

        if let Some(left) = &node_borrow.left {
            foo(Some(Rc::clone(&left)), result);
        }

        if let Some(right) = &node_borrow.right {
            foo(Some(Rc::clone(&right)), result);
        }
    }
}

pub fn test() {
    let mut node1 = TreeNode::new(1);
    let mut node2 = TreeNode::new(2);
    let node3 = TreeNode::new(3);

    node2.left = Some(Rc::new(RefCell::new(node3)));
    node1.right = Some(Rc::new(RefCell::new(node2)));

    let result = preorder_traversal(Some(Rc::new(RefCell::new(node1))));
    println!("{:?}", result);
}
