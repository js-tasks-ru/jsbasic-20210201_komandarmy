//1-module_1-task_calculating factorial
function factorial(n) {
  if (n ==0 || n == 1) return 1
    let result=1;
    for (let num = 1; num <= n; num++) {
         result= result * num;
         }
  return result;  
}
let factorial0 = factorial(0);
console.log("0!=",factorial0);
let factorial1 = factorial(1);
console.log("1!=",factorial1);
let factorial3 = factorial(3);
console.log("3!=",factorial3);
let factorial5 = factorial(5);
console.log("5!=",factorial5);