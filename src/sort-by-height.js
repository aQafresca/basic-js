const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ignoreNum = -1;
  let sortedIndex = 0;
  const sortedNum = arr.filter(num => num >= 0).sort((a, b) => a - b);

  const mapArr = arr.map((num) => {
    if (num < 0) {
      return ignoreNum;
    } else {
      return sortedNum[sortedIndex++];
    }
  });
  return mapArr;
}

module.exports = {
  sortByHeight
};
