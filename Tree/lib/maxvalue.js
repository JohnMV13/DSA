'use strict';

const Tree = require('./trees');

function maxValue(tree) {
  if(!tree.root) {
    return null;
  }
  let current = tree.root;
  while(current.right !== null) {
    current = current.right;
  }
  return current;
}
module.exports = maxValue;