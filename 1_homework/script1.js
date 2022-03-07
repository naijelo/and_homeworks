const FIRST_NUM = prompt('Enter first number');
const SECOND_NUM = prompt('Enter second number');

if (isNaN(FIRST_NUM) || isNaN(SECOND_NUM) || SECOND_NUM < 2 || SECOND_NUM > 36) {
  console.log("Некорректный ввод!");
} else {
  const RESULT = parseInt(FIRST_NUM, 10).toString(SECOND_NUM);
  console.log(RESULT);
}