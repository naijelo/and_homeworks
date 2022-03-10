const ENTER_DATA_1 = prompt('Enter first number');
const ENTER_DATA_2 = prompt('Enter second number');
const IS_VALIDATE = isNaN(ENTER_DATA_1) || isNaN(ENTER_DATA_2) || ENTER_DATA_2 < 2 || ENTER_DATA_2 > 36;

if (IS_VALIDATE) {
  console.log("Некорректный ввод!");
} else {
  const result = parseInt(ENTER_DATA_1, 10).toString(ENTER_DATA_2);
  
  console.log(result);
}
