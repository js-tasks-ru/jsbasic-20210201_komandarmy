function makeFriendsList(friends) {
  
  let ul = document.createElement('ul');
    
  for (let indexArr=0; indexArr < friends.length; indexArr++) {
      
    let li= document.createElement('li');
    li.append(friends[indexArr].firstName + " " + friends[indexArr].lastName);
    ul.appendChild(li);      
  }
  
  return document.body.appendChild(ul);
}
