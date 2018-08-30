'use strict';

const Tree = require('../lib/trees');

describe('Tree', () => {
  it('can add a new node to the tree', () => {
    var tree = new Tree();
    tree.insert(4);
    tree.insert(5);
    tree.insert(3);
    expect(tree.left.value).toBe(3);
    expect(tree.right.value).toBe(5);
  });
  it('can find a given value', () => {
    var tree = new Tree();
    tree.insert(4);
    tree.insert(6);
    tree.insert(3);
    expect(tree.find(3)).toBe(3);
  });
});