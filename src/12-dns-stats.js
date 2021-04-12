/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!Array.isArray(domains) || domains.length === 0) {
    return {};
  }
  const arr = domains.map((e) => e.split('.').reverse());
  const obj = {};
  const arrFlat = arr.flat(Infinity);
  arrFlat.forEach((element) => {
    if (!obj[element]) {
      const counter = 0;
      obj[element] = counter;
    }
    obj[element] += 1;
  });

  const array3 = Object.keys(obj).map((key) => [(key), obj[key]]);

  array3.forEach((e, index, array) => {
    if (array[index - 1]) {
      if (index <= 1) {
        e[0] = `${array[index - 1][0]}.${e[0]}`;
      }
      if (index > 1) {
        e[0] = `${array[1][0]}.${e[0]}`;
      }
    }
  });

  array3.forEach((e) => {
    e[0] = `.${e[0]}`;
  });

  const resultObj = Object.fromEntries(array3);
  return resultObj;
}

module.exports = getDNSStats;
