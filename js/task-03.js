'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt('Введите пароль администратора', message);

if (message === ADMIN_PASSWORD) {
  alert('Добро пожаловать!');
} else if (message !== ADMIN_PASSWORD && message !== null) {
  alert('Доступ запрещен, неверный пароль!');
  location.reload();
} else {
  alert('Отменено пользователем!');
}
