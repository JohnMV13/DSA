'use strict';

const Tree = require('./trees');

module.exports = (tree) =>{
  if(tree instanceof Tree){
    let start = tree.root;
    const fizzBuzz = function(node){
      if(!node){
        return;
      }
      if(typeof node.value === 'number'){
        if(node.value % 3 === 0){
          if(node.value % 5===0){
            node.value = 'FizzBuzz';
          }
          else{
            node.value = 'Fizz';
          }
        } else if(node.value % 5 === 0){
          node.value = 'Buzz';
        }
      }
      fizzBuzz(node.left);
      fizzBuzz(node.right);
    };
    fizzBuzz(start);
    return tree;
  } else throw new Error('TypeError: Input must be a tree');
};