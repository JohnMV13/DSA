'use strict';

function Stack() {
  this.head = null;
}

Stack.prototype.push = function(value){
  var node = new Node(value);
  node.next = this.head;
  this.head = node;
};

Stack.prototype.pop = function() {
  let current = this.head;
  this.head = this.head.next;
  return current;
};

function Node(value) {
  this.value = value;
  this.next = null;
}

module.exports = Stack;