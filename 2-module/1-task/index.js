function sumSalary(salaries) {
  let result = 0;
  for (let name in salaries) {
    let typeOfName = typeof salaries[name];
        if (typeOfName == 'number') {
          if (isFinite(salaries[name])) {
           result = result + salaries[name];
          }
        }
  }
    return result;
}