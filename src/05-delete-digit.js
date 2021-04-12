/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = [];
  const arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    const arrray = [...arr];
    arrray.splice(i, 1);
    result.push(arrray);
  }
  result = result.map((e) => parseInt(e.join(''), 10));
  return Math.max(...result);
}

module.exports = deleteDigit;
