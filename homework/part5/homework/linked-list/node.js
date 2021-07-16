module.exports = class Node {
  val;

  next;

  constructor(val, next) {
    this.val = val;
    this.next = next;
  }

  setValue(val) {
    this.val = val;
    return true;
  }

  setNext(next) {
    this.next = next;
  }
};
