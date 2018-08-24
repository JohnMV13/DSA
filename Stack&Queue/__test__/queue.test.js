'use strict';

const Queue = require('../lib/queue');

describe('Queue', () => {
  it('can add a value to the end of a doubly linked list', () => {
    var queue = new Queue();
    queue.enqueue(9);
    queue.enqueue(8);
    queue.enqueue(7);
    expect(queue.tail.value).toBe(7);
  });
  it('can remove the first element in a list', () => {
    var queue = new Queue();
    queue.enqueue(9);
    queue.enqueue(8);
    queue.enqueue(7);
    queue.dequeue();
    expect(queue.head.value).toBe(8);
  });
});