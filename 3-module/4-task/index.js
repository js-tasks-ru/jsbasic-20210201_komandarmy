function showSalary(users, age) {
  let result="";
  for (let userNumber=0; userNumber < users.length; userNumber++ ) {
      if (users[userNumber].age <= age) {
      result = result + users[userNumber].name +", "+ users[userNumber].balance;
      }
      if ((users[userNumber+1] !== undefined) && (users[userNumber+1].age <= age))  {
      result = result + "\n";
      }
   }
  return result;
}
