Array.prototype.myFilter = function(callback, thisArg) {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    if(callback.call(thisArg, this[i], i, this)) {
      arr.push(this[i]);
    };
  }
    
  return arr;
}

Array.prototype.myReduce = function(callback, initialValue = 0) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator =  callback(accumulator, this[i], i, this);
  }

  return accumulator;
}