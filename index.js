//String, RegExp, DataTime

//  Дана строка 'ahb acb aeb aeeb adcb axeb'.
//  Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
function show1() {
  let str = "ahb acb aeb aeeb adcb axeb".replace(/a.b/g, "+");
  console.log(str);
}
show1();
// Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
function show2() {
  let str = "2+3 223 2223".replace(/2\+3/g, "!");
  console.log(str);
}
show2();
// Получить день, месяц и год текущей даты и по отдельности вывести в консоль
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
console.log(year);
console.log(month);
console.log(day);
