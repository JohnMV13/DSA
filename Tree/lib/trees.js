'use strict';

class Tree {
  Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.parent = null;
  }
  Root() {
    this.root = null;
  }
}
Tree.prototype.insert = function(value) {
  if (this.root !== null) {
    this.root === value
  }
  let node = new Node(value);
  let current = this.root;
  while(current.right !== null || current.left !== null) {
    if(current.value > node) {
      if(current.left === null) {
        node.parent = current;
        current.left = node;
      } else {
        current = current.left
      }
    } if(current.value < node) {
      if(current.right === null) {
        node.parent = current;
        current.right = node;
      } else {
        current = current.right;
      }
    } else if(current.value === node) {
      return null;
    }
  }
}

Tree.prototype.find = function(value) {
  let current = this.root;
  while(current.value !== null) {
    if(current.value < value) {
      current = current.right;
    } if (current.value > value) {
      current = current.left;
    } if (current.value === value) {
      return current;
    }
  } if (current.value !== value) {
    return null;
  }
}

module.exports = Tree;