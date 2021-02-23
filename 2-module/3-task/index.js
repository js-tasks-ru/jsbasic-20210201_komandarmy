let calculator = {
    
    read: function (num1, num2) {
      numbers = [num1, num2];
    },
    
    sum: function () {
      return numbers[0] + numbers[1];
    },
    
    mul: function () {
      return numbers[0] * numbers[1];
    }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
