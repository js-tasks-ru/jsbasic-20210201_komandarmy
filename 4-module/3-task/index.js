function highlight(table) {
    //number of lines
  let lineTable = table.getElementsByTagName('tr').length; 
    
  for (let indexRow=1; indexRow < lineTable; indexRow++ ) { //row's circle
       let rowNow = table.rows[indexRow];
        
    //2. add 'male/female' class
    let genderClass = rowNow.cells[2].innerHTML;
      if (genderClass === "m") {
       rowNow.classList.add('male');
    } else {
       rowNow.classList.add('female');
    }
    //3. search data-avaliable class
    if (rowNow.cells[3].hasAttribute('data-available')) {
       
        //1. add class `available/unavailable`
        if (rowNow.cells[3].getAttribute('data-available') === "true") {
        rowNow.classList.add('available');
        } else {
        rowNow.classList.add('unavailable');
        }
    } else {
      rowNow.setAttribute('hidden',true);
    }
    //4. search 18 age
    if (rowNow.cells[1].innerHTML < 18) {
      rowNow.style.textDecoration = 'line-through'; 
    }
  }
}
