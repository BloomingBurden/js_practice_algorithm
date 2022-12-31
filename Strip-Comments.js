//TASK::::::::::::
//https://www.codewars.com/kata/51c8e37cee245da6b40000bd/javascript
// My universal solution. It can be solved more laconically. 

'use strict';

const solution = (str, chars) => {
  const alph = /^[a-zA-Z]+$/;
  let flag = false;
  let result = '';
  let arr = str.split('');
  
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    if (chars.includes(char)) {
      flag = true;
    }

    if (!alph.test(char) && !chars.includes(char) && flag && char !== ' ') {
      flag = false;
    }

    if (char === ' ' && chars.includes(arr[i + 1])) {
      continue;
    }

    flag ? '' : result += char;
  }

  return result.trim();
}

console.log(solution('\t@ bananas watermelons apples watermelons lemons\nlemons apples ?\nlemons.\ncherries cherries ?\nlemons strawberries cherries', ['!', '=', '@', ',', '?', '^', "'"]))