'use strict';
// https://www.codewars.com/kata/529bf0e9bdf7657179000008/javascript
// ^^^^^^^^^^^^^^^^^^^^^^^^^


const validSolution = (board) => {
  let subGrids = [[],[],[]];
  let count = 0;
  let base = 0;
  let key = 0;
  let firstTime = true;

  const checkGrids = (index) => {
    for (let item of subGrids) {
      let result = item.reduce((prev, item) => prev + item);
      if (count !== result) return false;
    }
    subGrids = [[], [], []];
    return true;
  }
  
  while (firstTime) {
    for (let i = 0; i < board.length; i++) {
      count = 0;
      for (let j = 0; j < board.length; j++) {
        let current = firstTime ? board[i][j] : board[j][i];
        
        if (firstTime) {
          if (j % 3 === 0 && j >= 3) {
            key++;
          }
          subGrids[key].push(current);
        }

        count += current;
      }
      
      if (firstTime) {
        if ((i + 1) % 3 === 0 && (i + 1) >= 3) {
          if (!checkGrids(i)) return false;
        }
        key = 0;
      }
  
  
      if (base === 0) base = count;
      if (base !== count) return false;
    }

    firstTime = !firstTime;
  }

  return true;
};

console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                [3, 4, 5, 2, 8, 6, 1, 7, 9]]))