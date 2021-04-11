/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function countNumberOfLetters(string) {
    const obj = string.split('').reduce((acc, elem) => {
      acc[elem] = (acc[elem] || 0) + 1;
      return acc;
    }, {});
    return obj;
  }
  const objStr1 = countNumberOfLetters(s1);
  const objStr2 = countNumberOfLetters(s2);
  let count = 0;

  if (s1.length < s2.length) {
    Object.keys(objStr1).forEach((elem) => {
      if (elem in objStr2) {
        count += Math.min(objStr1[elem], objStr2[elem]);
      }
    });
  } else {
    Object.keys(objStr2).forEach((elem) => {
      if (elem in objStr1) {
        count += Math.min(objStr1[elem], objStr2[elem]);
      }
    });
  }
  return count;
}
module.exports = getCommonCharacterCount;
