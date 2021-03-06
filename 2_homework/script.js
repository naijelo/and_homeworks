function makeObjectDeepCopy(obj) {
  const newObj = {};

  for (key in obj) {
    const type_not_Object = typeof obj[key] !== 'object';

    if (type_not_Object) {
      newObj[key] = obj[key];
    } else {
      newObj[key] = makeObjectDeepCopy(obj[key]);
    }
  }

  return newObj;
}

function selectFromInterval(arr, first_data, second_data) {
  const result_array = [];
  const every_elem_is_number = arr.every((elem) => typeof elem === 'number');

  if (!Array.isArray(arr) || !every_elem_is_number) {
    throw new Error('Wrong array data');
  }

  if (typeof first_data !== 'number' || typeof second_data !== 'number') {
    throw new Error('Wrong interval data');
  }

  if (first_data > second_data){
    [first_data, second_data] = [second_data, first_data];
  }

  arr.forEach(function(value) {
    if (value >= first_data && value <= second_data) {
        result_array.push(value);
    }
  });
  return result_array;
}

const myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    if (this.to < this.from || typeof this.to !== 'number' || typeof this.from !== 'number') {
      throw new Error('Ошибка!');
    }
    return {
      from: this.from,
      to: this.to,
      next() {
        if (this.from <= this.to) {
            return {done: false, value: this.from++};
          }
        return {done: true};
      },
    }    
  }
}

   