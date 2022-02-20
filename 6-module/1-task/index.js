/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 */
export default class UserTable {
  constructor(rows) {

    //create table
    let ourTable = document.createElement('TABLE');
    
      // create table head
      let ourTableHead = document.createElement('THEAD');
      
        let ourTR = document.createElement('TR');
            

          let name = document.createElement('TH');
          name.innerHTML = "Имя";
          ourTR.appendChild(name);

          let age = document.createElement('TH');
          age.innerHTML = "Возраст";
          ourTR.appendChild(age);

          let salary = document.createElement('TH');
          salary.innerHTML = "Зарплата";
          ourTR.appendChild(salary);

          let city = document.createElement('TH');
          city.innerHTML = "Город";
          ourTR.appendChild(city);

          let delRow = document.createElement('TH');
          delRow.innerHTML = "";
          ourTR.appendChild(delRow);

            
        //add the created tr to the table header
        ourTableHead.appendChild(ourTR);

      //add the created header to the table
      ourTable.appendChild(ourTableHead);

      //create table body
      let ourTableBody = document.createElement('TBODY');
      ourTableBody.setAttribute('id', 'ourtablebody');


      //add info from array
      //add row(tr)
      for (let i = 0; i <= rows.length; i++) {
        let tr = document.createElement('TR');
                       
          //add data(td)
            let nameTd = document.createElement('TD');
            nameTd.innerHTML = rows[i].name;
            tr.appendChild(nameTd);
            console.log(nameTd);

            let ageTd = document.createElement('TD');
            ageTd.innerHTML = rows[i].age;
            tr.appendChild(ageTd);
            console.log(ageTd);
            
            let salaryTd = document.createElement('TD');
            salaryTd.innerHTML = rows[i].salary;
            tr.appendChild(salaryTd);
            console.log(salaryTd);

            let cityTd = document.createElement('TD');
            cityTd.innerHTML = rows[i].city;
            tr.appendChild(cityTd);
            console.log(cityTd);

            let delTd = document.createElement('TD');
            delTd.innerHTML = '<button>X</button>';
            tr.appendChild(delTd);
            console.log(delTd);
          
        ourTableBody.appendChild(tr); 
      }
  }
}