use crate::list::def::ListNode;
// TODO
pub fn swap_pairs(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    head
}

pub fn test() {
    let node = Some(Box::new(ListNode::new(1)));
    swap_pairs(node);
}
