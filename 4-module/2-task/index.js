function makeDiagonalRed(table) {
  console.log(table === null);
  let rowsCount = table.querySelectorAll('tr').length;
 
  for (let i=0; i < rowsCount; i++ ) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }
}