/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = n.toString().split('');
  const result = arr.map((e) => parseInt(e, 10)).reduce((a, b) => a + b, 0);
  if (result.toString().length > 1) {
    return getSumOfDigits(result);
  }
  return result;
}

module.exports = getSumOfDigits;
