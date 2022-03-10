const ENTER_DATA_1 = +prompt('Enter first number');
const ENTER_DATA_2 = +prompt('Enter second number');

if (isNaN(ENTER_DATA_1) || isNaN(ENTER_DATA_2)) {
  console.log('Некорректный ввод!');
} else {
  const summary = ENTER_DATA_1 + ENTER_DATA_2;
  const divisor = ENTER_DATA_1 / ENTER_DATA_2;

  console.log(`Ответ: ${summary}, ${divisor}.`);
}