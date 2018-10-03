'use strict';

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.insert = function(value) {
  var node = new Node(value);
  node.next = this.head;
  this.head = node;
};

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
};

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
  var node = {
    value: newVal,
    next: null,
  };
  let current = this.head;
  while( current.next !== null && current.next.value !== value){ 
    current = current.next;
  }
  let storedNode;
  storedNode = current.next;
  node.next = storedNode;
  current.next = node;
};

LinkedList.prototype.insertAfter = function(value, newVal){
  var node = {
    value: newVal,
    next: null,
  };
  let current = this.head;
  while( current.next !== null && current.value !== value){ 
    current = current.next;
  }
  let storedNode;
  storedNode = current.next;
  current.next = newVal;
  current.next = storedNode;
};

LinkedList.prototype.fromEnd = function(k) {
  let current = this.head;
  let count = 1;
  if(typeof(k) == 'string'){
    return null;
  }
  while (current.next !== null) {
    current = current.next;
    count++;
  }
  current = this.head;
  if(k > count) {
    return null;
  }
  for(let i = 0; i < (count-1-k); i++) {
    current = current.next;
  }
  return current;
};

LinkedList.prototype.merge = function(listOne, listTwo){
  function NewList(nodeVal, next) {
    this.nodeVal = nodeVal;
    this.next = next;
  }
  var ListThree = new NewList(null, null);
  var newList = ListThree;
  while (listOne !== null && listTwo !== null) {
    if (listOne.data <= listTwo.data) { 
      newList.next = listOne;
      listOne = listOne.next;
    } else {
      newList.next = listTwo;
      listTwo = listTwo.next;
    }
    newList = newList.next;
  }
  if (listOne === null) { newList.next = listTwo; }
  if (listTwo === null) { newList.next = listOne; }
  return ListThree.next;
  
};

function Node(value) {
  this.value = value;
  this.next = null;
}
module.exports = LinkedList;