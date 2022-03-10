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
    
    //create <div> class modul
    let divModul = document.createElement('DIV');
    divModul.setAttribute('class', 'modul');
    this.elem = divModul;

        //create table
        let ourTable = document.createElement('TABLE');
        divModul.appendChild(ourTable);
        
            // create table head
            let ourTableHead = document.createElement('THEAD');
            //add the created header to the table
            ourTable.appendChild(ourTableHead);
          
                //create TR for table head
                let ourTR = document.createElement('TR');
                //add the created TR to the table header
                ourTableHead.appendChild(ourTR);   

                    //create TH and add to TR(THEAD)
                    let nameRow = document.createElement('TH');
                    nameRow.innerHTML = "Имя";
                    ourTR.appendChild(nameRow);

                    let age = document.createElement('TH');
                    age.innerHTML = "Возраст";
                    ourTR.appendChild(age);

                    let salary = document.createElement('TH');
                    salary.innerHTML = "Зарплата";
                    ourTR.appendChild(salary);

                    let city = document.createElement('TH');
                    city.innerHTML = "Город";
                    ourTR.appendChild(city);

            //create table body
            let ourTableBody = document.createElement('TBODY');
            //add created table body to our table
            ourTable.appendChild(ourTableBody);

                //add info from array
                //add row(tr)
                for (let i = 0; i < rows.length; i++) {
                    let tr = document.createElement('TR');
                    ourTableBody.appendChild(tr);

                      //add data(td)
                        let nameTd = document.createElement('TD');
                        nameTd.innerHTML = rows[i].name;
                        tr.appendChild(nameTd);

                        let ageTd = document.createElement('TD');
                        ageTd.innerHTML = (rows[i].age);
                        tr.appendChild(ageTd);
                        
                        let salaryTd = document.createElement('TD');
                        salaryTd.innerHTML = rows[i].salary;
                        tr.appendChild(salaryTd);
                      
                        let cityTd = document.createElement('TD');
                        cityTd.innerHTML = rows[i].city;
                        tr.appendChild(cityTd);
                        
                        //create del button
                        let delTd = document.createElement('TD');
                        delTd.innerHTML = '<button>X</button>';
                        tr.appendChild(delTd);
                }
                this.elem.addEventListener('click', (event) => this.onClick(event));
  }
  onClick(event) {
    if (event.target.tagName != 'BUTTON') {
      return;
    }

    let tr = event.target.closest('tr');

    tr.remove();
  }
}