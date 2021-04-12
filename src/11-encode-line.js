/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }
  const strArr = str.split('');
  const result = [];
  let answer = '';
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[i + 1]) {
      result.push(strArr[i]);
      result.push('$');
    } else {
      result.push(strArr[i]);
    }
  }

  result.pop();

  const fixedArr = result.join('').split('$');

  fixedArr.forEach((e) => {
    answer += `${e.length}${e[0]}`;
  });

  return answer.replace(/1/g, '');
}

module.exports = encodeLine;
