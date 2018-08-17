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
});