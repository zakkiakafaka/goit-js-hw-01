'use strict';

let input;
let inputN;
let total = 0;

while (input !== null) {
  input = prompt("Введите число. Для отмены нажмите Cancel.");
  console.log(input);
  console.log(typeof input);

  inputN = Number(input);
  console.log(inputN);
  console.log(typeof inputN);
  console.log(Number.isNaN(inputN));

  if (!Number.isNaN(inputN)) {
    total += Number(input);
    console.log(Number(input));
  } else {
    console.log("Введено неправильный тип данных");
    alert("Введено неправильный тип данных");
  }
}

alert(`Общая сумма чисел равна ${total}`);
console.log(total);