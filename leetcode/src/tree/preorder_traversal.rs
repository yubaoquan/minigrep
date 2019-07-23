
use std::rc::Rc;
use std::cell::RefCell;
use crate::tree::def::TreeNode;

#[derive(PartialEq, Eq)]
enum TraversalOrder {
    Pre,
    Middle,
    Post,
}

/// 前序遍历
pub fn preorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut result = vec![];
    foo(root, &mut result, &TraversalOrder::Pre);
    result
}

/// 中序遍历
pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut result = vec![];
    foo(root, &mut result, &TraversalOrder::Middle);
    result
}

/// 后序遍历
pub fn postorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut result = vec![];
    foo(root, &mut result, &TraversalOrder::Post);
    result
}

fn foo(root: Option<Rc<RefCell<TreeNode>>>, result: &mut Vec<i32>, order: &TraversalOrder) {
    if let Some(node) = root {
        let node_borrow = node.borrow();

        // 先序
        if *order == TraversalOrder::Pre {
            result.push(node_borrow.val);
        }

        if let Some(left) = &node_borrow.left {
            foo(Some(Rc::clone(&left)), result, order);
        }

        // 中序
        if *order == TraversalOrder::Middle {
            result.push(node_borrow.val);
        }

        if let Some(right) = &node_borrow.right {
            foo(Some(Rc::clone(&right)), result, order);
        }

        // 后序
        if *order == TraversalOrder::Post {
            result.push(node_borrow.val);
        }
    }
}

pub fn test() {
    let mut node1 = TreeNode::new(1);
    let mut node2 = TreeNode::new(2);
    let node3 = TreeNode::new(3);

    node2.left = Some(Rc::new(RefCell::new(node3)));
    node1.right = Some(Rc::new(RefCell::new(node2)));

    let result = postorder_traversal(Some(Rc::new(RefCell::new(node1))));
    println!("{:?}", result);
}
