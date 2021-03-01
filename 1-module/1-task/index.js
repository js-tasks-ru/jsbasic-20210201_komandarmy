/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n ==0 || n == 1) return 1
    let result=1;

  for (let num = 1; num <= n; num++) {
         result= result * num;
         }
  return result;  
}
