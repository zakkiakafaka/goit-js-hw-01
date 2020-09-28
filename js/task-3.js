'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let login = prompt("please, enter the password") ;

if (login === null) {
    message = 'Отменено пользователем!';
    console.log(message);
} else if (login === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    console.log(message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(message);
}

alert(message);