'use strict';

let country = prompt ("Укажите страну доставки");
let delivery = country[0].toUpperCase() + country.slice(1).toLowerCase();
let price;

switch (delivery) {

    case null:
        alert("Отменено Пользователем");
        console.log("Отменено Пользователем");
        break;

    case "Китай":
        price = 100;
        alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
        console.log(`Доставка в ${delivery} будет стоить ${price} кредитов`);
        break;
    
    case "Чили":
        price = 250;
        alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
        console.log(`Доставка в ${delivery} будет стоить ${price} кредитов`);
        break;
    
    case "Австралия":
        price = 170;
        alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
        console.log(`Доставка в ${delivery} будет стоить ${price} кредитов`);
        break;
    
    case "Индия":
        price = 80;
        alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
        console.log(`Доставка в ${delivery} будет стоить ${price} кредитов`);
        break;
    
    case "Ямайка":
        price = 120;
        alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
        console.log(`Доставка в ${delivery} будет стоить ${price} кредитов`);
        break;
    
    default:
        alert('В вашей стране доставка не доступна');
        console.log('В вашей стране доставка не доступна');
}