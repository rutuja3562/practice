Array.prototype.myCustomForEach = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const num = [1, 2, 3, 4, 5];
const multiplyBy2 = num.myCustomForEach((num) =>
  console.log("num...", num * 2)
);

// const multiplyBy2 = num.myCustomMap((num) => num * 2);

console.log("multiplyBy2...", multiplyBy2);
console.log("Original Array...", num);
