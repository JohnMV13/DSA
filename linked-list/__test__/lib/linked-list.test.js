'use strict';

const LinkedList = require('../../lib/linked-list');

describe('linkedList', () => {
  let linkList = new LinkedList();
  it('can find the head of the list', () => {
    expect(linkList.head).toBe(null);
  });

  describe('insert', () => {
    it('can insert at the head', () => {
      linkList.insert(4);
      expect(linkList.head.value).toBe(4);
    });
    it('can check to see if the next value is correct', () => {
      linkList.insert(5);
      expect(linkList.head.next.value).toBe(4);
    });
  });
  describe('includes', () => {
    it('can returns true if there is a value in the link', () => {
      expect(linkList.includes(4)).toBe(true);
      expect(linkList.includes(5)).toBe(true);
    });
    it('can return false if value is not in the list', () => {
      expect(linkList.includes(10)).toBe(false);
    });
  });
  describe('insertBefore', () => {
    //we now know insert is adding to the list before queried val. 
    it('inserts value before the queried value', () => {
      linkList.insert('400'); 
      linkList.insert('500');
      linkList.insertBefore('300', '450');
      expect(linkList.includes('450')).toBe(true);        
    });
  });
  describe('insertAfter', () => {
    //we now know insert is adding to the list before queried val. 
    it('inserts value after the queried value', () => {
      linkList.insert('600'); 
      linkList.insert('700');
      linkList.insertBefore('600', '650');
      expect(linkList.includes('650')).toBe(true); 
    });
  });
  describe('append', () => {
    it('adds to end of list', () => {
      linkList.append('400');
      expect(linkList.includes('400')).toBe(true);
    });
  });
});