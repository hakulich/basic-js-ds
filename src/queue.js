const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const newElm = new ListNode(value);

    if (this.first === null) {
      this.first = newElm;
      this.last = newElm;
      return this;
    } else {
      this.last.next = newElm;
      this.last = newElm;
    }
    return this;
  }

  dequeue() {
    // empty list
    if (this.first === null) return null;

    let delElm = this.first;

    //one element
    if (this.first === this.last) {
      this.last = null;
    }

    //more than one element
    this.first = this.first.next;

    return delElm.value;
  }
}

module.exports = {
  Queue,
};
