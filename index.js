//Arrays and Cycles
function check1() {
  let arr = ["film 1", "film 2", "film 3", "film 4"];
  for (let elem of arr) {
    console.log(elem);
  }
}
check1();

function check2() {
  let arr = ["bmw", "ford", "renault", "audi"];
  let str = arr.join(",");
  let arr2 = str.split(",");
  console.log(arr2);
}
check2();

function check3() {
  let arr = ["ivan", "ura", "vova", "sasha"];
  let arr2 = [];
  for (let elem of arr) {
    elem = "privet" + " " + elem;
    arr2.push(elem);
  }
  console.log(arr2);
}
check3();

function check4() {
  let arr = [1, 6, 7, 8, 3, 4, 5, 6, ""];
  let arr2 = [];
  for (let elem of arr) {
    let boolean = Boolean(elem);
    arr2.push(boolean);
    console.log(arr2);
  }
}
check4();

function check5() {
  let arr = [1, 6, 7, 8, 3, 4, 5, 6];
  arr.sort((b, a) => a - b);
  alert(arr);
}
check5();

function check6() {
  let arr = [1, 6, 7, 8, 3, 4, 5, 6];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 3) {
      console.log(arr[i]);
    }
  }
}
check6();

function showIndex(arr, num) {
  let arr = [1, 6, 7, 10, 3, 4, 5, 6];
  let num = 3;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === num) {
      console.log(i);
    }
  }
}
showIndex(arr, num);

function check6() {
  let a = 30;
  while (a > 10) {
    a--;
    console.log(a);
  }
}
check6();

function check7() {
  let num = 10;

  nextPrime: for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    console.log(i);
  }

  let i = 1;

  while (i <= 99) {
    console.log(i);
    i += 2;
  }
}
check7;
