'use strict';

function Queue(value) {
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function(value) {
  var node = new Node(value);
  if(this.tail === null) {
    this.head = node;
    this.tail = node;
  }
  var current = this.tail;
  current.next = node;
  node.previous = current;
  this.tail = node;
};

Queue.prototype.dequeue = function() {
  var current = this.head;
  if (!current) {
    return null;
  }

  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return current.value;
};

Queue.prototype.push = function(value){
  var node = new Node(value);
  node.next = this.head;
  this.head = node;
};

Queue.prototype.pop = function() {
  let current = this.head;
  this.head = this.head.next;
  return current;
};

function Node(value) {
  this.value = value;
  this.next = null;
}

module.exports = Queue;