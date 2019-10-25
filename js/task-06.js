'use strict';
let input;
let total = 0;
input = prompt();

while (input !== null && input !== NaN) {
  while (isNaN(input)) {
    alert('Введено не число! Попоробуйте ещё');
    input = 0;
  }
  input = Number.parseFloat(input);
  total += input;
  console.log(total);
  input = prompt();
}

alert(`Сумма = ${total}`);
