/**
 * https://leetcode-cn.com/explore/learn/card/linked-list/195/classic-problems/753/
 * 奇偶链表
 */
const { makeList } = require('./util.js');

function oddEvenList(head) {
  let node = head;
  const arr = listToArr(head);
  const sorted = sortByOdd(arr);
  sorted.forEach((node, i) => {
    node.next = sorted[i + 1];
  });
  return head;
}

function listToArr(head) {
  const result = [];
  let node = head;
  while (node) {
    result.push(node);
    node = node.next;
  }
  return result;
}

function sortByOdd(arr) {
  const odd = [];
  const even = [];
  arr.forEach((item, index) => {
    if (index % 2 === 0) {
      odd.push(item);
    } else {
      even.push(item);
    }
  });
  return [...odd, ...even];
}

module.exports = function() {
  const list = makeList([1, 2, 3, 4, 5]);
  console.info(list);
  oddEvenList(list);
  console.info(list);
}
