'use strict';

const Stack = require('./stack');

function mBV(string) {
  const stack = new Stack();
  let str = string;
  if(typeof str !== 'string') {
    return false;
  }
  for(let i = 0; i < str.length; i++) {
    if((str[i] === '(') || (str[i] === '[') || (str[i] === '{')) {
      stack.push(str[i]);
    } 
    if((str[i] === ')') || (str[i] === ']') || (str[i] === '}')) {
      if((str[i] === ')' && stack.head.value === '(') || (str[i] === ']' && stack.head.value === '[') || (str[i] === '}' && stack.head.value === '{')) {
        stack.pop();
      }
      else { 
        return false;
      }
    }
  }
  if(stack.head === null) {
    return true;
  }  else {
    return false;
  }
}
module.exports = mBV;