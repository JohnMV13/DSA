
'use strict';


function LinkedList() {
  this.head = null;
  console.log(this.head);
}

LinkedList.prototype.insert = function(value) {
  var node = new Node(value);
  node.next = this.head;
  this.head = node;
}

LinkedList.prototype.includes = function(value) {
  if(this.head == null) {
    return false;
  }
  var current = this.head;
  while(current.next !== null && current.value !== value) {
    current = current.next;
  }
  if (current.value == value) {
    return true;
  } else if (current.next == null){
    return false;
  }
}

function Node(value) {
  this.value = value;
  this.next = null;
}
module.exports = LinkedList;