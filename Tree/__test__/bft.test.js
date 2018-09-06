
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
    expect(ll.head).toBe(5);
  });

  it('can return null for no tree input', () => {
    // Act
    var ll = bFT('hello');

    // Assert
    expect(ll).toBe(null);
  });
});
