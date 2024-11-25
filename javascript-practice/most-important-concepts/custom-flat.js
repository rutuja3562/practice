// Array.prototype.myCustomFlat = function (d = 1) {
//   var result = [];
//   (function flatten(arr, d) {
//     for (var i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i]) && d > 1) {
//         flatten(arr[i], d - 1);
//       } else {
//         result.push(arr[i]);
//       }
//     }
//   })(this, d);
//   return result;
// };

// const numbers = [1, 2, 3, [2, 3, 4, [5, 6, 7]]];

// const result = numbers.myCustomFlat(3);

// console.log(result);

Array.prototype.myCustomFlat = function (d = 1) {
  var result = [];
  (function flatten(arr, d) {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && d > 1) {
        flatten(arr[i], d - 1);
      } else {
        result.push(arr[i]);
      }
    }
  })(this, d);

  return result;
};
const numbers = [1, 2, 3, [2, 3, 4, [5, 6, 7]]];

const result = numbers.myCustomFlat(1);

console.log(result);
