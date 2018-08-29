'use strict';

const mBV = require('../lib/mBV');
const Stack = require('../lib/stack');

describe('mBV', () => {
  it('can return true if (), [] and {} match up correctly', () => {
    expect(mBV('()')).toBe(true);
    expect(mBV('()[]{}')).toBe(true);
    expect(mBV('([{}])')).toBe(true);
  });
  it('can return false for incorrect inputs', () => {
    expect(mBV('(}')).toBe(false);
    expect(mBV('(])')).toBe(false);
  });
  it('can return false if not a string', () => {
    expect(mBV(1)).toBe(false);
    expect(mBV([])).toBe(false);
  });
});