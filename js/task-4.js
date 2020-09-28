'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let maxDroidsForThatPrice = credits / pricePerDroid
let totalPrice;
let order = prompt ("How many Droids do You want to buy?");

if (order === null) {
    console.log('Отменено пользователем!');
} else if (order > maxDroidsForThatPrice) {
    totalPrice = order * pricePerDroid;
    console.log('Недостаточно средств на счету!');
} else if (order < maxDroidsForThatPrice) {
    totalPrice = credits - order * pricePerDroid;
    console.log(`Вы купили ${order} дроидов, на счету осталось ${totalPrice} кредитов.`);
}  