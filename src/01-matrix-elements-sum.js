/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = [];
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (matrix[j - 1] === undefined) {
        result.push(matrix[j][i]);
      } else if (matrix[j - 1][i] !== 0) {
        result.push(matrix[j][i]);
      }
    }
  }
  return result.flat(Infinity).reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
