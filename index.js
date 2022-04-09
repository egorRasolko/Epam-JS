//Exception handling

try {
  let a = 3 / 0;
  console.log(a);
} catch (error) {
  console.log("let перед использованием нужно объявить");
  console.log("на ноль делить нельзя");
}
