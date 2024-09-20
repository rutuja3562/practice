var str = "racecar";
function checkIsPalindrome(str) {
  var i = 0;
  var j = str.length - 1;
  while (i <= j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
console.log("palindrome string...", checkIsPalindrome(str));

// Time Complexity -  O(N);
// space complexity - O(1);
