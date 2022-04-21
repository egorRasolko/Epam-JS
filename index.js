// Arrays and Cycles

// Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
function check1() {
  let arr = ["film 1", "film 2", "film 3", "film 4"];
  for (let elem of arr) {
    console.log(elem);
  }
}
check1();

// Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
function check2() {
  let arr = ["bmw", "ford", "renault", "audi"];
  let str = arr.join(",");
  let arr2 = str.split(",");
  console.log(arr2);
}
check2();

// Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
function showName() {
  const namefirst = ["ivan", "ura", "vova", "sasha"];
  const names = namefirst.map((item) => "hello " + item);
  console.log(names);
}
showName();

// Преобразовать числовой массив в Boolean

function checkBoolean() {
  const arr = [1, 6, 7, 8, 3, 4, 5, 6, ""];
  const check = arr.map((item) => Boolean(item));
  console.log(check);
}
checkBoolean();

// Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию

function check5() {
  let arr = [1, 6, 7, 8, 3, 4, 5, 6];
  arr.sort((b, a) => a - b);
  alert(arr);
}
check5();

// Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

function sortArray() {
  let arr = [1, 6, 7, 8, 3, 4, 5, 6];
  const result = arr.filter((item) => item > 3);
  console.log(result);
}
sortArray();

//Написать функцию, которая принимает
// два параметра - массив и число и выводит индекс элемента массива равный числу

function showIndex() {
  let arr = [1, 6, 7, 10, 3, 4, 5, 6];
  let result = arr.indexOf(6);
  console.log(result);
}
showIndex();

// Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

function check6() {
  let a = 30;
  while (a > 10) {
    a--;
    console.log(a);
  }
}
check6();

// Реализовать цикл, который выводит в консоль простые числа

function check7() {
  let num = 10;

  nextPrime: for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    console.log(i);
  }
  check7();
}

// Реализовать цикл, который выводит в консоль нечетные числа
function check8() {
  for (let i = 1; i <= 99; i++) {
    if (i % 2) {
      console.log(i);
    }
  }
}
check8();
