function getMinMax(str) {
  let arrayOfString = str.split(/\s|\,/);
  
  for (let indexArr = 0; indexArr < arrayOfString.length; indexArr++) {
    arrayOfString[indexArr] = Number(arrayOfString[indexArr]);
  };

  let fistSortNum;
  let secondSortNum;
  arrayOfString.sort((fistSortNum, secondSortNum) => fistSortNum - secondSortNum);
  
  let result = {
    min: arrayOfString[0],
    max: arrayOfString[arrayOfString.length - 1]
  };
  return result;
}
