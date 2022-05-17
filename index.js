//Exception handling

// В try catch конструкцию завернуть код: console.log(a), let a = 3.
//  И вывести ошибку – ‘let перед использованием нужно объявить’.
// При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'

try {
  console.log(a);
  let a = 3;
} catch (e) {
  console.log("let перед использованием нужно объявить");
}

function divFunc(a, b) {
  const res = a / b;
  if (res === Infinity || isNaN(res)) {
    try{
      throw new Error("На ноль делить нельзя");
    }catch(e){
      console.log(e.message);
    }
  }
  return res;
}
divFunc(1, 0);

