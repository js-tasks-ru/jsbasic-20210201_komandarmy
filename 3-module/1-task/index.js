function namify(users) {
    let names = [];  
    for (let indexInNamesArray = 0; indexInNamesArray < users.length; indexInNamesArray++) {
      names [indexInNamesArray] = users[indexInNamesArray].name;
     }
    return names;    
}
