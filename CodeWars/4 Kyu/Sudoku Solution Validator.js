/*
Problem: 
Sudoku Background

Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids 
(also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)
Sudoku Solution Validator

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. 
The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
*/
function validSolution(board){
    //evalute each 3x3
 for (let i = 1, k = 0; i < 10; i++, (k == 6 ? k = 0 : k+=3)) {
     let line = []
     let sum = 0
     let uniqueNumbers = new Set(line)
     if (i < 4) {
       line = [board[0].slice(0+k,3+k), board[1].slice(0+k,3+k), board[2].slice(0+k,3+k)]
       .flat()
       uniqueNumbers = new Set(line)
       sum = line.reduce((a,b) => a+b)
       if (sum !== 45) {
         return false
       }
       if (uniqueNumbers.size !== 9) {
           return false
       }
   }
     if (i >= 4 && i <= 6) {
       line = [board[3].slice(0+k,3+k), board[4].slice(0+k,3+k), board[5].slice(0+k,3+k)]
       .flat()
       uniqueNumbers = new Set(line)
       sum = line.reduce((a,b) => a+b)
       if (sum !== 45) {
         return false
       }
       if (uniqueNumbers.size !== 9) {
           return false
       }
     }
     if (i >= 7) {
       line = [board[6].slice(0+k,3+k), board[7].slice(0+k,3+k), board[8].slice(0+k,3+k)]
       .flat()
       uniqueNumbers = new Set(line)
       sum = line.reduce((a,b) => a+b)
       if (sum !== 45) {
         return false
       }
       if (uniqueNumbers.size !== 9) {
           return false
       }
     }
   }
   //evaluate each horizontal line
 for (let boards of board) {
   let sum = boards.reduce((a,b) => a+b);
   let uniqueNumbers = new Set(boards)
   if (sum !== 45) {
     return false
   }
   if (uniqueNumbers.size !== 9) {
     return false
   }
 }
   //evalute each vertical line
 for (let i = 0; i < 9; i++) {
     let line = []
     let uniqueNumbers = new Set(line)
     board.forEach((boards) => {
       line.push(boards[0+i])
     })
     uniqueNumbers = new Set(line)
     let sum = line.reduce((a,b) => a+b);
     if (sum !== 45) {
       return false;
     }
     if (uniqueNumbers.size !== 9) {
       return false
     }
     line = []
   }
   return true
 }

/*
Pre-Solution Thoughts:
We're given an Array of 9 nested Arrays, we'll need to check that each Array's index only contains the numbers 1-9 in any order but no number is allowed to repeat. We then have to return
true or false whether the Array given to us matches the requirements.

My initial thought which is probably to just do regular recursion, do something like a for loop that just checks the index values of each Array compared to the first Array
and if everything checks out, return True. Thinking about that, it wouldn't work though, maybe create a new Array in the loop which contains all the values, if the same nummber
occurs twice then throw a False? That'd work. It'd be something dumb like:

  for (let i = 0; i < board.length - 1; i++) {
    let arr = [board[0][i], board[1][i], board[2][i], board[3][i], board[4][i], board[5][i], board[6][i], board[7][i], board[8][i]]
    let sum = arr.reduce((a, b) => a + b)
    if (sum != 45) {
        return false;
    }
}
return true;
}
This would just create Array's for each element based on the index, creates a sum and checks if it equals 45, if it doesn't it'll throw a false and if it does it'll return true.

This was a naive approach, Sudoku has 3x3 squares which would mean that indexes 0-8 stack like 0-2, 3-5, 6-8, and then the 3 top 3x3 blocks can't have a matching 1-9 number,
and the top and bottom 3x3 block can't have a matching 1-9 number looking at if you start top left and only list the index and array:

array 0 would be compared to array 4, checking from the top left going down would be a00, a03, a06, a30, a33, a36, a60, a63, a66.

Checking the top row first line would check: a00, a01, a02, a10, a11, a12, a20, a21, a22

Hm, I think if we instead broke each array down in to their 3 numbers, e.g. [1,2,3], [4,5,6], [7,8,9], so like,

const cache = {
    '1': [1,2,3],
    '2': [4,5,6],
    '3': [7,8,9]
}

If we did this for each Array we would have a total of 27 keys, with their values being the array. So when we need to actually compare top lines we would only check
1,4,5 for the top row, 2,5,6 for the next, etc. Which is handled nicely with a loop, the return values will have to be flattened and we could still check to make sure
that each line is equal to 45 and any time it isn't it'll exit with a false.

Iterating along the lateral is a bit different, it would have to look like my previous board iteration because we'd have to manually create all of them.
Unless I create another. Although, couldn't on the initial generation, couldn't I just create the cache's instead of breaking up the lines I could just use a for loop
to create each line which would give us a total of 18 lines which will all have to equal to 45.


Post Solution Thoughts:

Honestly, I can only blame myself and my own reading comprehension. I believed when the author mentioned that
the cells were 3x3, I thought he meant each nested Array was a 3x3 so a majority of my work was wasted.

Even then, my work is mostly just slopshod conditionals but even then, not much more is needed. The only more
difficult portion would be to pull out the 3x3s.

I'm not happy with how this problem went, it's more so just annoying that the author didn't directly tell us
how to interpret the Sudoku 9x9.
*/
/*
Tests and Example code:

let j = 0;
let k = 0;
let board1 = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]];

let board2 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];

let board3 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
  ]
let cont = [...board1].flat()

 function validSolution(board){
    let fixedBoard = [];
    //cleans up the board paramater
    for (let i = 0; i < 81; i += 9) {
        let cont = [...board].flat()
        fixedBoard.push(cont.slice(0+i,9+i))
    };
      //evaluate each horizontal line
    for (let boards of board) {
      let sum = boards.reduce((a,b) => a+b);
      let uniqueNumbers = new Set(boards)
      if (sum !== 45) {
        return false
      }
      if (uniqueNumbers.size !== 9) {
        return false
      }
    }
      //evalute each vertical line
    for (let i = 0; i < 9; i++) {
        let line = []
        let uniqueNumbers = new Set(line)
        fixedBoard.forEach((boards) => {
          line.push(boards[0+i])
        })
        uniqueNumbers = new Set(line)
        let sum = line.reduce((a,b) => a+b);
        if (sum !== 45) {
          return false;
        }
        if (uniqueNumbers.size !== 9) {
          return false
        }
        line = []
      }
      return true
    }


    console.log(validSolution(board3))

/* function validSolution(board){
    let fixedBoard = [];
    //cleans up the board paramater
    for (let i = 0; i < 81; i += 9) {
        let cont = [...board].flat()
        fixedBoard.push(cont.slice(0+i,9+i))
    };
    for (let i = 0; i < 9; i++) {
        let line = []
        fixedBoard.forEach((boards) => {
          line.push(boards[0+i])
        })
        let sum = line.reduce((a,b) => a+b);
        if (sum !== 45) {
          return false;
        }
        console.log(line)
        line = []
      }
      return true
    }
 */

 /*   function validSolution(board){
        /*     let fixedBoard = [];
            //cleans up the board paramater
            for (let i = 0; i < 81; i += 9) {
                let cont = [...board].flat()
                fixedBoard.push(cont.slice(0+i,9+i))
            }; */
            /*
            //evaluate each 3x3
             for (let boards of board) {
              let sum = boards.reduce((a,b) => a+b)
              let uniqueNumbers = new Set(boards)
              if (sum !== 45) {
                return false
              }
              if (uniqueNumbers.size !== 9) {
                return false
              }
            }
            //evaluate each horizontal line
            for (let i = 1, k = 0; i < 10; i++, (k == 6 ? k = 0 : k+=3)) {
              let line = []
              let sum = 0
              let uniqueNumbers = new Set(line)
              if (i < 4) {
                line = [board[0].slice(0+k,3+k), board[1].slice(0+k,3+k), board[2].slice(0+k,3+k)]
                .flat()
                uniqueNumbers = new Set(line)
                sum = line.reduce((a,b) => a+b)
                if (sum !== 45) {
                  return false
                }
                if (uniqueNumbers.size !== 9) {
                    return false
                }
            }
              if (i >= 4 && i <= 6) {
                line = [board[3].slice(0+k,3+k), board[4].slice(0+k,3+k), board[5].slice(0+k,3+k)]
                .flat()
                uniqueNumbers = new Set(line)
                sum = line.reduce((a,b) => a+b)
                if (sum !== 45) {
                  return false
                }
                if (uniqueNumbers.size !== 9) {
                    return false
                }
              }
              if (i >= 7) {
                line = [board[6].slice(0+k,3+k), board[7].slice(0+k,3+k), board[8].slice(0+k,3+k)]
                .flat()
                uniqueNumbers = new Set(line)
                sum = line.reduce((a,b) => a+b)
                if (sum !== 45) {
                    console.log('here5')
        
                  return false
                }
                if (uniqueNumbers.size !== 9) {
        
                    return false
                }
              }
            }
            //evaluate each vertical line
              for (let i = 0, k = 0; i < 9; i++, (k > 1 ? k = 0 : k++)) {
                let line = [];
                let sum = 0
                let uniqueNumbers = new Set(line)
                if (i < 3) {
                  line = [board[0][0+k], board[0][3+k], board[0][6+k], board[3][0+k], board[3][3+k], board[3][6+k], board[6][0+k], board[6][3+k], board[6][6+k]]
                  .flat()
                  uniqueNumbers = new Set(line)
                  sum = line.reduce((a,b) => a+b)
                  if (sum !== 45) {
                    console.log(i, k, line, sum)
                    return false
                  }
                  if (uniqueNumbers.size !== 9) {
                    console.log('here1')
        
                      return false
                  }
                }
                if (i >= 3 && i <= 5) {
                  line = [board[1][0+k], board[1][3+k], board[1][6+k], board[4][0+k], board[4][3+k], board[4][6+k], board[7][0+k], board[7][3+k], board[7][6+k]]
                  .flat()
                  uniqueNumbers = new Set(line)
                  sum = line.reduce((a,b) => a+b)
                  if (sum !== 45) {
                    console.log('here2')
        
                    return false
                  }
                  if (uniqueNumbers.size !== 9) {
                    console.log('here3')
        
                      return false
                  }
                }
                if (i >= 6) {
                  line = [board[2][0+k], board[2][3+k], board[2][6+k], board[5][0+k], board[5][3+k], board[5][6+k], board[8][0+k], board[8][3+k], board[8][6+k]]
                  .flat()
                  uniqueNumbers = new Set(line)
                  sum = line.reduce((a,b) => a+b)
                  if (sum !== 45) {
                    console.log('here4')
        
                    return false
                  }
                  if (uniqueNumbers.size !== 9) {
                    console.log('here5')
        
                      return false
                  }
                }
              }
            return true
            } */
/*     function validSolution(board){
     let fixedBoard = [];
    //cleans up the board paramater
    for (let i = 0; i < 81; i += 9) {
        let cont = [...board].flat()
        fixedBoard.push(cont.slice(0+i,9+i))
    };
      //evaluate each horizontal line
    for (let boards of board) {
      let sum = boards.reduce((a,b) => a+b);
      let uniqueNumbers = new Set(boards)
      if (sum !== 45) {
        return false
      }
      if (uniqueNumbers.size !== 9) {
        return false
      }
    }
      //evalute each vertical line
    for (let i = 0; i < 9; i++) {
        let line = []
        let uniqueNumbers = new Set(line)
        fixedBoard.forEach((boards) => {
          line.push(boards[0+i])
        })
        uniqueNumbers = new Set(line)
        let sum = line.reduce((a,b) => a+b);
        if (sum !== 45) {
          return false;
        }
        if (uniqueNumbers.size !== 9) {
          return false
        }
        line = []
      }
      return true
    } */

/*         function validSolution(board){
            let fixedBoard = []
            //cleans up the board paramater
            for (let i = 0; i < 81; i += 9) {
                let cont = [...board].flat()
                fixedBoard.push(cont.slice(0+i,9+i))
            }
            //evaluate each 3x3
            for (let boards of fixedBoard) {
              let sum = boards.reduce((a,b) => a+b)
              if (sum !== 45) {
                return false
              }
            }
            //evaluate each horizontal line
            for (let i = 1; i < 10; i++) {
              let j = 0;
              let k = 0;
              let line = []
              if (i < 4) {
                line = [board[0+j].slice(0+k,3+k), board[1+j].slice(0+k,3+k), board[2+j].slice(0+k,3+k)]
                  .flat()
                  .reduce((a,b) => a+b);
                if (line !== 45) {
                  return false
                }
                (k > 3 ? 0 : k++)
              }
              if (i >= 4 && i <= 6) {
              j = 3
                line = [board[0+j].slice(0+k,3+k), board[1+j].slice(0+k,3+k), board[2+j].slice(0+k,3+k)]
                  .flat()
                  .reduce((a,b) => a+b);
                if (line !== 45) {
                  return false
                }
                (k > 3 ? 0 : k++)
              }
              if (i >= 7) {
              j = 6
                line = [board[0+j].slice(0+k,3+k), board[1+j].slice(0+k,3+k), board[2+j].slice(0+k,3+k)]
                  .flat()
                  .reduce((a,b) => a+b);
                if (line !== 45) {
                  return false
                }
                
                (k > 3 ? 0 : k++)
              }
            }
            //evaluate each vertical line
              for (let i = 0; i < 9; i++) {
                let line = [];
        
                if (i < 4) {
                  line = [board[0][0+i], board[0][3+i], board[0][6+i], board[3][0+i], board[3][3+i], board[3][6+i], board[6][0+i], board[6][3+i], board[6][6+i]]
                  .reduce((a,b) => a+b);
                  if (line !== 45) {
                    return false;
                  }
                }
                if (i >= 4 && i <= 6) {
                  line = [board[1][0+i], board[1][3+i], board[1][6+i], board[4][0+i], board[4][3+i], board[4][6+i], board[7][0+i], board[7][3+i], board[7][6+i]]
                  .reduce((a,b) => a+b);
                  if (line !== 45) {
                    return false;
                  }
                }
                if (i >= 7) {
                  line = [board[2][0+i], board[2][3+i], board[2][6+i], board[5][0+i], board[5][3+i], board[5][6+i], board[8][0+i], board[8][3+i], board[8][6+i]]
                  .reduce((a,b) => a+b);
                  if (line !== 45) {
                    return false;
                  }
                }
                
              }
            return true
            }
            */