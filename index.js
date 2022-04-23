//Exception handling

// В try catch конструкцию завернуть код: console.log(a), let a = 3.
//  И вывести ошибку – ‘let перед использованием нужно объявить’. 
// При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
 
const checkError = (a, b) => {
  try {
    if (!a) {
      throw "Переменную надо задать";
    }
    if (b === 0) {
      throw "На ноль делить нельзя";
    }
    console.log(a / b);
  } catch (e) {
    console.log(e);
  }
};
xxx( );
