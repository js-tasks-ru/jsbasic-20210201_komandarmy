/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
//1-module_3-task_first_SYMBOL
function ucFirst(str) {
  if (str === "" || str === null) {
    return "";
  }

  let lengthStr = str.length;
  if (lengthStr === 1) {
    return str.toUpperCase();
  }

  let firstSymbol = str.charAt(0);
  return firstSymbol.toUpperCase() + str.slice(1, lengthStr);
}
ucFirst('вася')
ucFirst('в')
ucFirst('')