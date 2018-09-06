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

  let currentNode = queue.dequeue();
  while(currentNode) {
  // equivalent for loop:
  // for (let currentNode = queue.dequeue(); currentNode; currentNode = queue.dequeue())

    if(currentNode.left !== null) {
      queue.enqueue(currentNode.left);
      console.log(queue);
    }
    if(currentNode.right !== null) {
      queue.enqueue(currentNode.right);
    }
    ll.insert(currentNode.value);
    console.log(ll);

    currentNode = queue.dequeue();
  }
  return ll;

}
module.exports = bFT