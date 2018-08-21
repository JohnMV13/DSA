
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

LinkedList.prototype.append = function(val){
  var node = {
    value: val,
    next: null,
  };
  if(!this.head){
    this.head = node;
  } else {
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
};

LinkedList.prototype.insertBefore = function(value, newVal){
  console.log(this.head);
  var node = {
    value: newVal,
    next: null,
  };
  let current = this.head;
  console.log(current.next);
  while( current.next !== null && current.next.value !== value){ 
    current = current.next;
    console.log('next', current);
  }
  let storedNode;
  storedNode = current.next;
  node.next = storedNode;
  current.next = node;
};

LinkedList.prototype.insertAfter = function(value, newVal){
  console.log(this.head);
  var node = {
    value: newVal,
    next: null,
  };
  let current = this.head;
  console.log(current.next);
  while( current.next !== null && current.value !== value){ 
    current = current.next;
    console.log('next', current);
  }
  let storedNode;
  storedNode = current.next;
  current.next = newVal;
  current.next = storedNode;
};

function Node(value) {
  this.value = value;
  this.next = null;
}
module.exports = LinkedList;