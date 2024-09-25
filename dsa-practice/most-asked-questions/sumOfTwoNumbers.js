function sumOfTwoNumbersInArray(arr, sum) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == sum) {
        return true;
      }
    }
  }
  return false;
}
// Time complexity O(n**2)
var arr = [1, 2, 4, 5, 3, 8];
var sum = 11;
console.log("Sum of two elements", sumOfTwoNumbersInArray(arr, sum));

function optimizedTwoSum(arr, sum) {
  var i = 0;
  var j = arr.length - 1;
  while (i < j) {
    var newSum = arr[i] + arr[j];
    if (newSum === sum) {
      return true;
    } else if (newSum < sum) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}
var arr1 = [1, 2, 3, 4, 5, 8];
var sum1 = 11;
console.log("Sum of two elements,,", optimizedTwoSum(arr1, sum1));

// Time complexity O(n)
