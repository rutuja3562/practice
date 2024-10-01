function rotateArray(arr, k) {
  var rotatedArr = [];
  var n = arr.length;
  for (var i = k; i < n; i++) {
    rotatedArr.push(arr[i]);
  }
  for (var j = 0; j < k; j++) {
    rotatedArr.push(arr[j]);
  }
  return rotatedArr;
}
var arr = [1, 2, 3, 4, 5, 6, 7];
var k = 2;
console.log(rotateArray(arr, k));
