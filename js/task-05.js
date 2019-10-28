'use strict';
let message;
message = prompt('Впишите страну доставки:');

if (message === null) {
  alert('Отменено пользователем!');
} else {
  message = message.toLowerCase();
  let price;
  switch (message) {
    case 'китай': {
      price = 100;
      alert(`Доставка в Китай будет стоить ${price} кредитов`);
      break;
    }
    case 'чили':
      price = 250;
      alert(`Доставка в Чили будет стоить ${price} кредитов`);
      break;
    case 'австралия':
      price = 170;
      alert(`Доставка в Австралию будет стоить ${price} кредитов`);
      break;
    case 'индия':
      price = 80;
      alert(`Доставка в Индию будет стоить ${price} кредитов`);
      break;
    case 'ямайка':
      price = 120;
      alert(`Доставка в Ямайку будет стоить ${price} кредитов`);
      break;
    default: {
      alert('В вашей стране доставка не доступна');
      break;
    }
  }
}
