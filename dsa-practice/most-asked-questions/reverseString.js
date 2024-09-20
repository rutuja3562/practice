var str = "rrrererrr";

function reverseString(str) {
  var n = str.length;
  var newString = "";
  for (var i = n - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log("reverse string..", reverseString(str));

// time Complexity -  O(n);
// Space Complexity - O(n);

var str = "swap";
function optimizedReverseString(s) {
  let strArray = s.split("");
  var n = strArray.length;
  var i = 0;
  var j = n;
  while (i < j) {
    swap(strArray, i, j);
    i++;
    j--;
  }
  return strArray.join("");
}

function swap(s, i, j) {
  var temp = s[i];
  s[i] = s[j];
  s[j] = temp;
}
console.log("Optimized String ", optimizedReverseString(str));

// time complexity O(n)
