'use strict';

const maxValue = require('../lib/maxvalue');
const Tree = require('../lib/trees');

describe('maxValue', () => {
  it('can find the max value in a given tree', () => {
    let tree = new Tree();
    tree.insert(9);
    tree.insert(4);
    tree.insert(12);
    tree.insert(2);
    tree.insert(16);
    expect(maxValue(tree).value).toBe(16);
    tree.insert(100);
    expect(maxValue(tree).value).toBe(100);
  });
  it('returns null for an empty tree', () => {
    let tree = new Tree();
    expect(maxValue(tree)).toBe(null);
  });
  it('returns null if it is given anything except a tree', () => {
    expect(maxValue('hello')).toBe(null);
  });
});