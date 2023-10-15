/**
 * Sudoku Solver
 * 
 * Constraints: 
 * 1. all numbers in a row should be unique
   2. all numbers in a column should be unique
   3. all numbers in smaller 3 by 3 square should be unique
 */

//test board
let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
//input random ints into blocks
let x = Math.floor(Math.random() * 10);
console.log(x);

function Solve(x, y) {
  if (board[y][x] != 0) {
    return Solve(x, y); // ?
  } else {
    for (i = 0; i < board.length; i++) {
      let cell = board[i][i];
      if ((board[i][i] = cell)) {
        board[x][y] = cell;
        return true;
      }
    }
  }
  return false;
}
MakeBoard = () => {};
GenerateSudokuNum = () => {
  num = Math.floor(Math.random() * 10);
  if (num > 10 || num == 0) {
    return GenerateSudokuNum(num);
  }
  console.log(num);
  return num;
};
console.log("random num: ");
GenerateSudokuNum();
const col = 9;
const row = 9;

let grid = Array.from({ length: row }, () => new Array(col).fill(0));
console.log(grid);
