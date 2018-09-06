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

    expect(queue.peek()).toBe(9);
    expect(queue.dequeue()).toBe(9);
    expect(queue.head.value).toBe(8);
    expect(queue.head.prev).toBe(null); // prev used to point to 9

    expect(queue.peek()).toBe(8);
    expect(queue.dequeue()).toBe(8);
    expect(queue.head.value).toBe(7);
    expect(queue.head.prev).toBe(null); // prev used to point to 8

    expect(queue.peek()).toBe(7);
    expect(queue.dequeue()).toBe(7);
    expect(queue.head).toBe(null);
    expect(queue.tail).toBe(null);

    expect(queue.peek()).toBe(null);
    expect(queue.dequeue()).toBe(null);
  });
  it('can add a new value to the beginning of the list', () => {
    var queue = new Queue();
    queue.push(9);
    queue.push(8);
    queue.push(7);
    queue.push(6);
    expect(queue.head.value).toBe(6);
  });
  it('can add any input to the front', () => {
    var queue = new Queue();
    queue.push(123);
    expect(queue.head.value).toBe(123);
    queue.push('hello');
    expect(queue.head.value).toBe('hello');
  });
  it('can remove an item from the end of the list', () => {
    var queue = new Queue();
    queue.push(9);
    queue.push(8);
    queue.push(7);
    queue.push(6);
    queue.pop();
    expect(queue.head.value).toBe(7);
  });
});