// Merge two sorted arrays
var arr1 = [1, 3, 5, 7];
var arr2 = [2, 4, 6, 8];

function mergeTwoSortedArray(arr1, arr2) {
  var mergeArray = [];
  var i = 0;
  var j = 0;
  var m = arr1.length;
  var n = arr2.length;
  while (i < m && j < n) {
    if (arr[i] < arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else {
      mergeArray.push(arr2[j]);
      j++;
    }
  }
  while (i < m) {
    mergeArray.push(arr1[i]);
    i++;
  }
  while (j < n) {
    mergeArray.push(arr2[j]);
    j++;
  }
  return mergeArray;
}
console.log("Merge sort...", mergeTwoSortedArray(arr1, arr2));

// Time complexity -  O(m + n);

//  Space Complexity -  O(1);
