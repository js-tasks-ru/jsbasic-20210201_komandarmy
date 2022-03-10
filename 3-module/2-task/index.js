function filterRange(arr, a, b) {
  let newArr = [];
  let nuMax;
  let nuMin;
  if (a > b) {
    nuMax = a;
    nuMin = b;
  } else {
    nuMax = b;
    nuMin = a;
  };

  if ((a === b) && arr.includes(a)) {
    newArr = [a]
  };

  for (let indexArr = 0; indexArr < arr.length; indexArr++) {
    if ((nuMax >= arr[indexArr]) && (nuMin <= arr[indexArr])) {
      newArr = newArr.concat(arr[indexArr]);
    };
  };
  return newArr;
}