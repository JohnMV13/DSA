'use strict';

const bFT = require('../lib/bft');
const Tree = require('../lib/trees');
const Queue = require('../../stackqueue/lib/queue');
const LL = require('../../linked-list/lib/linked-list');

describe('BFT', () => {
  let tree;
  let queue;
  let bft;
  let ll;
  it('returns null for an empty tree', () => {
    tree = new Tree();
    expect(tree.root).toBe(null);
  });
  it('can move a tree\'s nodes from left to right starting from the root into a linked list', () => {
    tree = new Tree();
    bft = bFT();
    queue = new Queue();
    ll = new LL();
    tree.insert(5);
    tree.insert(10);
    tree.insert(4);
    tree.insert(2);
    tree.insert(3);
    tree.insert(12);
    tree.insert(6);
    bft(tree);
  expect(ll.head.value).toBe(5);
  })
});