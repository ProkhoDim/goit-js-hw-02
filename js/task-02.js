'use strict';
const total = 100;
let ordered = 50;
// ordered = prompt(ordered);
// if (isNaN(Number(ordered))) {
//   alert('введите число без букв!');
//   location.reload();
// } else
console.log('ordered =', ordered);
if (ordered <= total) {
  // alert('Заказ оформлен, с вами свяжется менеджер');
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  // alert('На складе недостаточно твоаров!');
  console.log('На складе недостаточно твоаров!');
}
