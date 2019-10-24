'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let order;
order = prompt('Введите количество дроидов, которое хотите приобрести:', order);
// ====================================================
//  КАКОЙ КОД ЛУЧШЕ?
// if (isNaN(Number.parseInt(order)) && order !== null) {
//   alert('Введите число без букв!');
//   location.reload();
// } else {
//   let priceOrdered = Number.parseInt(order) * pricePerDroid;
//   if (priceOrdered <= credits) {
//     alert(
//       `Вы купили ${Number.parseInt(order)} дроидов, на счету осталось ${credits -
//         priceOrdered} кредитов.`,
//     );
//   } else if (priceOrdered > credits) {
//     alert('Недостаточно средств на счету!');
//   } else {
//     alert('Отменено пользователем!');
//   }
// }
// ===================================================
let orderIsNaN;
orderIsNaN = isNaN(Number.parseInt(order));
if (order !== null && orderIsNaN === false) {
  let priceOrdered = Number.parseInt(order) * pricePerDroid;
  if (priceOrdered <= credits) {
    alert(
      `Вы купили ${Number.parseInt(order)} дроидов, на счету осталось ${credits -
        priceOrdered} кредитов.`,
    );
  } else {
    alert('Недостаточно средств на счету!');
  }
} else if (order !== null && orderIsNaN === true) {
  alert('Введите число без букв!');
  location.reload();
} else {
  alert('Отменено пользователем!');
}
