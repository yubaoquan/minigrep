// https://leetcode-cn.com/explore/learn/card/linked-list/197/conclusion/766/

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

function copyRandomList(head) {
  if (!head) return head;
  const newHead = new Node(head.val);
  const list1 = [];
  const list2 = [];
  let current1 = head;
  let current2 = newHead;

  while (current1) {
    current2.next = current1.next ? new Node(current1.next.val) : null;

    list1.push(current1);
    list2.push(current2);
    current1 = current1.next;
    current2 = current2.next;
  }

  list2.forEach((item, index) => {
    const randomIndex = list1.findIndex(node => node === list1[index].random);
    item.random = list2[randomIndex];
  });


  return newHead;
}

export default function() {
  console.info('test', copyRandomList(new Node(1)));
}
