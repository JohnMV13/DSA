'use strict'; 

let Stacks = require('../lib/stack');

describe('Stacks', () => {
  it('can push a new value to the top of a linked list', () => {
    var stacks = new Stacks();
    stacks.push(3);
    stacks.push(4)
    expect(stacks.head.value).toBe(4);
  });
  it('can pop the top node of a list from the list', () => {
    var stack = new Stacks();
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.pop();
    expect(stack.head.value).toBe(4);
  });
  it('returns null for an empty list', () => {
    var stack = new Stacks();
    expect(stack.head).toBe(null);
  });
});