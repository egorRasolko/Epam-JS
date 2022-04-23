// Objects and Functions

//  Создать объект car, добавить к нему свойство color со значением 'черный'
// Изменить свойство color объекта car на 'зеленый'
// В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
let car = {
  color: "black",
  power: showPower(),
};
function showPower() {
  console.log("100hp");
}
car.color = "green";

// На склад принимают груши и яблоки,
// напишите функцию, которая возвращает результат сложения количества принятых груш и яблок
function countingFruits(apples, pies) {
  return apples + pies;
}
fruitCount(2, 2);

// В терминале оплаты сохранено ваше имя, напишите функцию
// для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
function showNameTerminal(name) {
  if (name === "Egor") {
    alert("privet" + name);
  } else {
    alert("net imeni");
  }
}
nameTerminal("Egor");

// Напишите функцию вычисления типа аргумента и вывод типа в консоль
function typeArgument(x, y) {
  console.log(typeof x, typeof y);
}
typeArgument("a", 4);

// Напишите функцию, которая определяет является ли число простым или нет
function showPrimeNumber(num) {
  for (let divider = 2; divider < num; divider++) {
    if (num % divider == 0) {
      return false;
    }
  }
  return num > 1;
}

showPrimeNumber(-1);
