/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = true;
  const arr = n.split('-');
  if (arr.length === 6) {
    arr.forEach((e) => {
      if (e.length === 2) {
        if (/^([0-9A-Fa-f])([0-9A-Fa-f])/.test(e) === false) {
          result = false;
        }
      } else {
        result = false;
      }
    });
  } else {
    result = false;
  }
  return result;
}

module.exports = isMAC48Address;
