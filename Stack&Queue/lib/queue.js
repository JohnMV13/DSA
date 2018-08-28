'use strict';

function Queue(value) {
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function(value) {
  var node = new Node(value);
  if(this.tail === null) {
    this.tail = node;
    this.head = node;
  }
  var current = this.tail;
  current.next = node;
  node.previous = current;
  this.tail = node;
  console.log('hello');
}

Queue.prototype.dequeue = function() {
  var current = this.head;
  this.head = this.head.next;
  return current;
}

Queue.prototype.push = function(value){
  var node = new Node(value);
  node.next = this.head;
  this.head = node;
}

Queue.prototype.pop = function() {
  let current = this.head;
  this.head = this.head.next;
  return current;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

module.exports = Queue;