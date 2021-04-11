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
  function calcSum (num) {
    const sum = String(num).split('').reduce((acc, elem) => acc + Number(elem), 0);
    return sum;
  }
  let result = calcSum(n);
  while (result >= 10) {
    result = calcSum(result);
  }
  return result;
}

module.exports = getSumOfDigits;
