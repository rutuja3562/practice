const numbers = [1, 2, 3, 4];

Array.prototype.myCustomReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (var i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

const sum = numbers.myCustomReduce((acc, num) => acc + num, 0);
console.log(sum);

const product = numbers.myCustomReduce((acc, num) => acc * num);
console.log(product);
