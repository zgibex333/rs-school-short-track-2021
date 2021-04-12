/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const objSet = new Set(names);
  const inputUniq = Array.from(objSet);
  if (inputUniq.length === names.length) {
    return names;
  }

  const obj = {};
  names.forEach((e) => {
    if (!obj[e]) {
      obj[e] = 1;
    } else {
      obj[e]++;
    }
  });
  Object.keys(obj).forEach((key) => {
    obj[key] += -1;
  });
  let arr = [...names];
  arr.reverse();
  arr.forEach((e, index) => {
    arr.splice(index, 1, obj[e]);
    obj[e]--;
  });
  arr = arr.map((e) => {
    if (e === 0) {
      return '';
    }
    return e;
  });
  arr.reverse();
  for (let i = 0; i < names.length; i++) {
    if (arr[i]) {
      const namez = names;
      namez[i] += `(${arr[i]})`;
    }
  }
  const inputSet = new Set(names);
  const inputArrayUniq = Array.from(inputSet);
  const oneMoreTime = [...names];
  if (inputArrayUniq.length === oneMoreTime.length) {
    return oneMoreTime;
  }
  return renameFiles(oneMoreTime);
}

module.exports = renameFiles;
