// TASK::::::::::
//https://www.codewars.com/kata/55983863da40caa2c900004e/javascript

'use strict';

const nextBigger = (n) => {
  let str = n.toString().split('');
  let min = [];
  let leftArr;
  
  // Find all elements can be changed
 labelName: for (let i = str.length - 1; i >= 0; i--) {
    let current = +str[i];
    
    for (let j = 0; j < min.length; j++) {
      let currentMin = min[j][0];
      // Find the exact element
      if (current < currentMin) {
        let indexMin = min[j][1];
        // Change the smallest element
        [str[i], str[indexMin]] = [str[indexMin], str[i]];

        leftArr = str.splice(0, i + 1);
        break labelName;
      }
    }
    min.push([current, i]);
    min.sort((a,b) => a[0] - b[0]);
  }
  
  if (!leftArr) return -1;

  // Sort all right element and back full ready number
  return +leftArr.concat(str.sort((a,b) => a - b)).join('')
};

console.log(nextBigger(267837459840));  //267837480459