function camelize(str) {
  let strArray = str.split("");
  for (let numberStrArray = 0; numberStrArray < strArray.length; numberStrArray++) { 
    if (strArray[numberStrArray] === "-") {
      strArray[numberStrArray+1] = strArray[numberStrArray+1].toUpperCase();
      strArray.splice(numberStrArray, 1);
    };
  }
return strArray.join("");
}
