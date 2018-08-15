'use strict';

const BinarySearch = (sorted, key) => {
  let start = 0;
  let end = sorted.length - 1;
  var middle;
  var count = 0;
  while (start <= end) {
    if (count++ > 100) throw new Error('infinite loop!');
    
    middle = Math.floor((start + end)/2);
    if(key === sorted[middle]) {
      return middle;
    } else if (key > sorted[middle]) {
      start = middle + 1;
    } else if (key < sorted[middle]) {
      end = middle - 1;
    } 
    console.log({start, end});
  }
  return -1;
} 
module.exports = BinarySearch;