function isString(arg) {
  return typeof arg === 'string';
}

function concatStrings(a, separator = '') {
  if (!isString(separator)) {
    separator = '';
  }

  return function (b) {
    if (isString(b)) {
      return concatStrings(a + separator + b, separator);
    }

    console.log(a);
  }
};

class Calculator {
  constructor(first_data, second_data) {
    if (arguments.length > 2) {
      throw new Error('More than 2 arguments');
    }
    
    this.first_data = first_data;
    this.second_data = second_data;

    this.setX = this.setX.bind(this);
    this.setY = this.setX.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
    
    this.isNumberInvalid(this.first_data);
    this.isNumberInvalid(this.second_data);
  }

  isNumberInvalid(data) {
    if (typeof data !== 'number' || data === (NaN || +Infinity || -Infinity)) {
      throw new Error('Wrong data type');
    }
  }

  isNumberNull(data) {
    if (data === 0) {
      throw new Error('Can\'t divide by null');
    }
  }

  setX(num) {
    this.isNumberInvalid(num);
    this.first_data = num;
  }

  setY(num) {
    this.isNumberInvalid(num);
    this.second_data = num;
  }

  logSum() {
    console.log(+this.first_data + this.second_data);
  }

  logMul() {
    console.log(this.first_data * this.second_data);
  }

  logSub() {
    console.log(+this.first_data - this.second_data);
  }

  logDiv() {
    this.isNumberNull(this.second_data);
    console.log(this.first_data / this.second_data);
  }
}
