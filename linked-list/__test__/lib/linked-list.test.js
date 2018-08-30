'use strict';

const LinkedList = require('../../lib/linked-list');

describe('linkedList', () => {
  it('can find the head of the list', () => {
    var linkList = new LinkedList();
    expect(linkList.head).toBe(null);
  });

  describe('insert', () => {
    it('can insert at the head', () => {
      var linkList = new LinkedList();
      linkList.insert(4);
      expect(linkList.head.value).toBe(4);
    });
    it('can check to see if the next value is correct', () => {
      var linkList = new LinkedList();
      linkList.insert(4);
      linkList.insert(5);
      expect(linkList.head.next.value).toBe(4);
    });
  });
  describe('includes', () => {
    it('can returns true if there is a value in the link', () => {
      var linkList = new LinkedList();
      linkList.insert(4);
      linkList.insert(5);
      expect(linkList.includes(4)).toBe(true);
      expect(linkList.includes(5)).toBe(true);
    });
    it('can return false if value is not in the list', () => {
      var linkList = new LinkedList();
      expect(linkList.includes(10)).toBe(false);
    });
  });
  describe('insertBefore', () => {
    //  we now know insert is adding to the list before queried val. 
    it('inserts value before the queried value', () => {
      var linkList = new LinkedList();
      linkList.insert('400'); 
      linkList.insert('500');
      linkList.insertBefore('300', '450');
      expect(linkList.includes('450')).toBe(true);        
    });
  });
  describe('insertAfter', () => {
    //we now know insert is adding to the list before queried val. 
    it('inserts value after the queried value', () => {
      var linkList = new LinkedList();
      linkList.insert('600'); 
      linkList.insert('700');
      linkList.insertBefore('600', '650');
      expect(linkList.includes('650')).toBe(true); 
    });
  });
  describe('append', () => {
    it('adds to end of list', () => {
      var linkList = new LinkedList();
      linkList.append('400');
      expect(linkList.includes('400')).toBe(true);
    });
  });
  describe('fromEnd', () => {
    it('can find the kth node in a list', () => {
      var linkList = new LinkedList();
      linkList.insert(5);
      linkList.insert(4);
      linkList.insert(3);
      linkList.insert(2);
      linkList.insert(1);
      expect(linkList.fromEnd(4).value).toBe(1);
    });

    it('will return null if given a string', () => {
      var linkList = new LinkedList();
      linkList.insert(5);
      linkList.insert(4);
      linkList.insert(3);
      linkList.insert(2);
      linkList.insert(1);
      expect(linkList.fromEnd('hello')).toBe(null);
    });
    it('will return null if k > list length', () => {
      var linkList = new LinkedList();
      linkList.insert(5);
      linkList.insert(4);
      linkList.insert(3);
      linkList.insert(2);
      linkList.insert(1);
      expect(linkList.fromEnd(6)).toBe(null);
    });
  });
  // describe('merge', () => {
  //   it('takes two LL and merges them into a third ', () => {  
  //     let list1 = new LinkedList() 
  //     list1.insert('1'); 
  //     list1.insert('2');
  //     list1.insert('3');
  //     let list2 = new LinkedList() 
  //     list2.insert('A'); 
  //     list2.insert('B');
  //     list2.insert('C');
  //     list2.insert('D');
  //     let mergeLists = merge(list1, list2);
  //     expect(mergeLists).toBe('1', 'A', '2', 'B', '3','C','D'); 
  //   });
  // });
});