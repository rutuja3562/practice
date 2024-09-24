Array.prototype.myCustomFilter = function (callback) {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

let num = [1, 2, 3, 4, 5];

let customFilter = num.myCustomFilter((num) => num % 2 == 0);
let inbuildFilter = num.filter((num) => num % 2 == 0);
console.log("customFilter...", customFilter);
console.log("inbuildFilter...", inbuildFilter);
console.log("originalArray", num);
