function findMinimunOfArray(array) {
  var n = array.length;
  var min = Infinity;
  for (var i = 0; i < n; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
var array = [1, 5, -4, -10, -1000, 34, 76];
console.log("Minimum number...", findMinimunOfArray(array));

function findMaxNumOfArray(arr) {
  var n = arr.length;
  var max = -Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("Maximum number...", findMaxNumOfArray(array));
