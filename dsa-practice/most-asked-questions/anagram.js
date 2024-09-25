// Check whether two given strings X and Y of sizes N and M respectively are anagram of each other or not.
// input: N = 4, X = abcd, M = 4, Y = dacb
// Output: Yes
// All the characters of string "abcd" is present in "dacb" and in same frequencies. Hence both are anagram of each other.

function isAnagram(str1, str2) {
  var n = str1.length;
  var m = str2.length;
  str1 = str1.split("").sort();
  str2 = str2.split("").sort();
  console.log(str1, str2);
  if (n !== m) {
    return false;
  }
  for (var i = 0; i < n; i++) {
    if (str1[i] != str2[i]) return false;
  }
  return true;
}
console.log(isAnagram("bcd", "sec"));
