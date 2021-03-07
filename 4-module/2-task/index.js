function makeDiagonalRed(table) {
  let lengthTable = document.getElementsByTagName('table').item(0).getElementsByTagName('tr').length;
 
  for (let indexCell=0; indexCell < lengthTable; indexCell++ ) {
    table.rows[indexCell].cells[indexCell].style.backgroundColor = 'red';
  }
}