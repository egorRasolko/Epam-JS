//String, RegExp, DataTime
function show1() {
  let str = "ahb acb aeb aeeb adcb axeb".replace(/a.b/g, "+");
  console.log(str);
}
show1();

function show2() {
  let str = "2+3 223 2223".replace(/2\+3/g, "!");
  console.log(str);
}
show2();

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
console.log(year);
console.log(month);
console.log(day);
