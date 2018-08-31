'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.parent = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);

    // Tree is empty, so value is our new root
    if (this.root === null) {
      this.root = node;
      return;
    }

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

  find(value) {
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
}

module.exports = Tree;
