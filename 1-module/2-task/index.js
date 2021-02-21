/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(name) {
  if (name === "" || name===null) {
    return false;
  }  
 
  let lengthName = name.length;
  let MAX_LENGTH_NAME = 4
  if (lengthName < MAX_LENGTH_NAME) {
    return false;
  } 
  
  let isSpaceInName=name.includes(" ");
  return !isSpaceInName
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
