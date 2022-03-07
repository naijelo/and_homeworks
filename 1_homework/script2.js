const FIRST_NUM = +prompt('Enter first number');

if (isNaN(FIRST_NUM)) {
  console.log('Некорректный ввод!');
} else {
  const SECOND_NUM = +prompt('Enter second number');

  if (isNaN(SECOND_NUM)) {
      console.log('Некорректный ввод!');
  } else {
      console.log(`Ответ: ${FIRST_NUM + SECOND_NUM}, ${FIRST_NUM / SECOND_NUM}.`)
  }
    
}    