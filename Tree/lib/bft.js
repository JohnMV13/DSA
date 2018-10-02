'use strict';

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
  queue.enqueue(tree.root);

  let count = 0;
  let currentNode = queue.dequeue();
  while(currentNode && count++ < 10000) {
  // equivalent for loop:
  // for (let currentNode = queue.dequeue(); currentNode; currentNode = queue.dequeue())

    if(currentNode.left !== null) {
      queue.enqueue(currentNode.left);
    }
    if(currentNode.right !== null) {
      queue.enqueue(currentNode.right);
    }
    ll.append(currentNode.value);

    currentNode = queue.dequeue();
  }
  return ll;

}
module.exports = bFT;