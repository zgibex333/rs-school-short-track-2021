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
  const outcast = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      outcast.push([arr[i], i]);
    }
  }
  const arrWithoutOnes = arr.filter((e) => e !== -1).sort((a, b) => a - b);
  outcast.forEach((e) => {
    arrWithoutOnes.splice(e[1], 0, e[0]);
  });
  return arrWithoutOnes;
}

module.exports = sortByHeight;
