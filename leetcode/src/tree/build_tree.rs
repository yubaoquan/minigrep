use std::rc::Rc;
use std::cell::RefCell;
use crate::tree::def::TreeNode;
use crate::tree::preorder_traversal::{
    preorder_traversal,
    inorder_traversal,
    postorder_traversal,
};

/// 根据中序和后序构建二叉树
pub fn build1(inorder: Vec<i32>, postorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    match inorder.is_empty() {
        true => None,
        _ => build_1_inner(&inorder[..], &postorder[..]),
    }
}

fn build_1_inner(inorder: &[i32], postorder: &[i32]) -> Option<Rc<RefCell<TreeNode>>> {
    let root_val = postorder[postorder.len() - 1];
    let (in_left, in_right) = cut_by_val(&inorder, root_val);
    let (post_left, post_right) = cut_by_len(postorder, in_left.len(), in_right.len());

    let root = Rc::new(RefCell::new(TreeNode::new(root_val)));
    let mut root_borrow = root.borrow_mut();

    root_borrow.left = match in_left.is_empty() {
        true => None,
        _ => build_1_inner(in_left, post_left),
    };

    root_borrow.right = match in_right.is_empty() {
        true => None,
        _ => build_1_inner(in_right, post_right),
    };

    Some(Rc::clone(&root))
}

/// 根据前序和中序创建二叉树
// pub fn build2(inorder: Vec<i32>, postorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
//     let node = Rc::new(RefCell::new(TreeNode::new(5)));
//     Some(node)
// }

/// 以数组中的某个值为中点, 将数组分成左右两部分
fn cut_by_val(arr: &[i32], val: i32) -> (&[i32], &[i32]) {
    let middle = arr.iter().position(|x| *x == val);

    match middle {
        Some(middle) => (&arr[0..middle], &arr[middle + 1 ..]),
        None => panic!("Root not found"),
    }
}

/// 将数组根据传入的长度参数分割成两部分
fn cut_by_len(arr: &[i32], left_len: usize, right_len: usize) -> (&[i32], &[i32]) {
    (&arr[0..left_len], &arr[left_len .. left_len + right_len])
}

pub fn test() {
    let inorder = vec![9,3,15,20,7];
    let postorder = vec![9,15,7,20,3];

    let inorder = vec![];
    let postorder = vec![];

    if let Some(root) = build1(inorder, postorder) {
        let pre_result = preorder_traversal(Some(Rc::clone(&root)));
        let in_result = inorder_traversal(Some(Rc::clone(&root)));
        let post_result = postorder_traversal(Some(Rc::clone(&root)));

        println!("{:?}", pre_result);
        println!("{:?}", in_result);
        println!("{:?}", post_result);
    }
}
