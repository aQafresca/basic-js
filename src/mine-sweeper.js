const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
const row = matrix.length;
const column = matrix[0].length;
const newMatrix = Array.from({ length: row }, () => Array(column).fill(0));

const direction = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
];

for (let i = 0; i < row; i += 1) {
  for (let j = 0; j < column; j += 1) {
    if (matrix[i][j]) {
      
      for (let [x, y] of direction) {
        const newRow = i + x;
        const newCol = j + y;

        if (newRow >= 0 && newRow < row && newCol >= 0 && newCol < column) {
          newMatrix[newRow][newCol] += 1;
        }
      }
    }
  }
}
return newMatrix;

}

module.exports = {
  minesweeper
};
