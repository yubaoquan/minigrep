
use std::rc::Rc;
use std::cell::RefCell;
use crate::tree::def::TreeNode;

/// [路径总和](https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/3/solve-problems-recursively/14/)
///
/// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
///
/// 说明: 叶子节点是指没有子节点的节点。
///
/// 示例:
///
/// 给定如下二叉树，以及目标和 sum = 22，
/// ```
///           5
///          / \
///         4   8
///        /   / \
///       11  13  4
///      /  \      \
///     7    2      1
/// ```
/// 返回 `true`, 因为存在目标和为 22 的根节点到叶子节点的路径 `5->4->11->2`。
pub fn has_path_sum(root: Option<Rc<RefCell<TreeNode>>>, sum: i32) -> bool {
    let mut arr = vec![];
    foo(root, &mut arr);
    if let Some(_) = arr.iter().find(|&&x| x == sum) {
        true
    } else {
        false
    }
}


fn foo(root: Option<Rc<RefCell<TreeNode>>>, result: &mut Vec<i32>) {
    if let Some(node) = root {
        let node_borrow = node.borrow();

        if node_borrow.left.is_none() && node_borrow.right.is_none() {
            result.push(node_borrow.val);
        }

        if let Some(left) = &node_borrow.left {
            left.borrow_mut().val += node_borrow.val;
            foo(Some(Rc::clone(&left)), result);
        }

        if let Some(right) = &node_borrow.right {
            right.borrow_mut().val += node_borrow.val;
            foo(Some(Rc::clone(&right)), result);
        }
    }
}

pub fn test() {
    let node1 = Rc::new(RefCell::new(TreeNode::new(5)));
    let node2 = Rc::new(RefCell::new(TreeNode::new(4)));
    let node3 = Rc::new(RefCell::new(TreeNode::new(8)));
    let node4 = Rc::new(RefCell::new(TreeNode::new(11)));
    let node5 = Rc::new(RefCell::new(TreeNode::new(13)));
    let node6 = Rc::new(RefCell::new(TreeNode::new(4)));
    let node7 = Rc::new(RefCell::new(TreeNode::new(7)));
    let node8 = Rc::new(RefCell::new(TreeNode::new(2)));
    let node9 = Rc::new(RefCell::new(TreeNode::new(1)));

    node1.borrow_mut().left = Some(Rc::clone(&node2));
    node1.borrow_mut().right = Some(Rc::clone(&node3));

    node2.borrow_mut().left = Some(Rc::clone(&node4));

    node3.borrow_mut().left = Some(Rc::clone(&node5));
    node3.borrow_mut().right = Some(Rc::clone(&node6));

    node4.borrow_mut().left = Some(Rc::clone(&node7));
    node4.borrow_mut().right = Some(Rc::clone(&node8));

    node6.borrow_mut().right = Some(Rc::clone(&node9));

    let result = has_path_sum(Some(node1), 180);
    println!("{}", result);
}
