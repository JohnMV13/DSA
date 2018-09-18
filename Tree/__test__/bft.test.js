'use strict';

const bFT = require('../lib/bft');
const Tree = require('../lib/trees');

describe('BFT', () => {
  it('returns null for an empty tree', () => {
    // Arrange
    let tree = new Tree();

    // Act
    let ll = bFT(tree);

    // Assert
    expect(ll).toBe(null);
  });

  it('can move a tree\'s nodes from left to right starting from the root into a linked list', () => {
    // Arrange
    let tree = new Tree();
    tree.insert(5);
    tree.insert(10);
    tree.insert(4);
    tree.insert(2);
    tree.insert(3);
    tree.insert(12);
    tree.insert(6);

    // Act
    var ll = bFT(tree);

    // Assert
    expect(ll.head.value).toBe(5);
    expect(ll.head.next.value).toBe(4);
    expect(ll.head.next.next.value).toBe(10);
    expect(ll.head.next.next.next.value).toBe(2);
    expect(ll.head.next.next.next.next.value).toBe(6);
    expect(ll.head.next.next.next.next.next.value).toBe(12);
    expect(ll.head.next.next.next.next.next.next.value).toBe(3);
    expect(ll.head.next.next.next.next.next.next.next).toBe(null);

    // We would rather test like this:
    // expect(ll.toString()).toBe('5,4,10,2,6,12,3');
    // Or like this:
    // expect(ll.toArray()).toEqual([5,4,10,2,6,12,3]);
  });

  it('can return null for no tree input', () => {
    // Act
    var ll = bFT('hello');

    // Assert
    expect(ll).toBe(null);
  });
});