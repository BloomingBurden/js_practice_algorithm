// TASK level 7:
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript

const solution = (str, ending) => { 
  return ending.length === 0 ? true : str.slice(-ending.length) === ending; 
};

