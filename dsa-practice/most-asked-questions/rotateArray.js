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

// Optimized method
// Time Complexity: O(N)
// Space Complexity:O(1)

function rotateArrayByK(k, arr) {
  var n = arr.length;
  k = k % n;
  reverseArr(arr, 0, k - 1);
  reverseArr(arr, k, n - 1);
  reverseArr(arr, 0, n - 1);
  return arr;
}

function reverseArr(arr, i, j) {
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

var arr = [1, 2, 3, 4, 5, 6, 7];
var k = 2;
console.log(rotateArray(arr, k));
console.log(rotateArrayByK(k, arr));
