function mergeTwoLists(l1, l2) {
  if (!l1 && !l2) {
    return;
  }

  const result = {};
  let node = result;
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val <= l2.val) {
        node.val = l1.val;
        l1 = l1.next;
      } else {
        node.val = l2.val;
        l2 = l2.next;
      }
      node.next
    } else {
      if (l1) {

      }
    }
  }
}
