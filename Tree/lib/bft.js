'use strict';

const Tree = require('./trees');
const Queue = require('../../stackqueue/lib/queue');
const LL = require('../../linked-list/lib/linked-list');

function bFT(tree) {
  if(!tree) {
    return null;
  }
  if(!tree.root) {
    return null;
  }
  let ll = new LL();
  let queue = new Queue();
  // let head = tree.root;
  queue.enqueue(tree.root);
  console.log(queue);
  while(queue.head !== null) {
    if(queue.head.value.left !== null) {
      queue.enqueue(queue.head.value.left);
      console.log(queue);
    }
    if(queue.head.value.right !== null) {
      queue.enqueue(queue.head.value.right);
    }
    ll.insert(queue.dequeue().value);
    console.log(ll);
  }
  return ll;

}
module.exports = bFT