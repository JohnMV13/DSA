'use strict';

const search = require('../../lib/array_binary_search');
describe('search', () => {
  it('can find the given number in a sorted array', () => {
    expect(search([1,2,3,4,5], 3)).toBe(2);
    expect(search([4,8,15,16,23,42], 15)).toBe(2);
    expect(search([4,8,12,16,20], 4)).toBe(0);
  });
  it('returns -1 for given item not matching sorted array', () => {
    expect(search([1,2,3,4,5,6], 9)).toBe(-1);
  });
  it('can return -1 if array is empty', () => {
    expect(search([])).toBe(-1);
  });
});