'use strict';
let input;
let total = 0;

while (prompt() !== null) {
  total += Number.parseFloat(prompt());
  console.log(total);
}
alert(`Сумма = ${total}`);
