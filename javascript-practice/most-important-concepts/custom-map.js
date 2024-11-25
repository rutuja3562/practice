Array.prototype.myCustomMap = function (callback) {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

const num = [1, 2, 3, 4, 5];

const multiplyBy2 = num.myCustomMap((num) => num * 2);

console.log("multiplyBy2...", multiplyBy2);
console.log("Original Array...", num);
