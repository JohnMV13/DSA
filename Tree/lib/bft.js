'use strict';

const Tree = require('./trees');
const Queue = require('../../stackqueue/lib/queue');
const LL = require('../../linked-list/lib/linked-list');

function bFT(tree) {
  if(!tree) {
    return null;
  }
  let ll = new LL();
  let queue = new Queue();
  console.log('hello');
  queue.enqueue(tree.root);
  while(queue.head !== null) {
    if(head.left !== null) {
      queue.enqueue(head.left);
    }
    if(head.right !== null) {
      queue.enqueue(head.right);
    }
    ll.insert(queue.dequeue());
  }
  return ll;
}
module.exports = bFT