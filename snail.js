//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1 
// TASK ^^^^^^

'use strict';

const snail = (matrix) => {
  const result = [];

  while (matrix.length > 0) {
    if (matrix.length === 1) {
      result.push(...matrix[0]);
      return result;
    }
    // MOVE TO RIGHT
    result.push(...matrix.shift());
    // MOVE TO BOTTOM
    for (let elem of matrix) {
      result.push(elem.pop());
    }
    // MOVE TO LEFT
    result.push(...matrix.pop().reverse());
    // MOVE TO TOP
    for (let i = matrix.length - 1; i >= 0; i--) {
      result.push(matrix[i].shift())
    }
  }

  return result;
};