function checkIsParentheses(string) {
  var stack = [];
  var n = string.length;
  for (var i = 0; i < n; i++) {
    if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
      stack.push(string[i]);
    } else {
      if (
        (string[i] == ")" && stack[stack.length - 1] === "(") ||
        (string[i] == "}" && stack[stack.length - 1] === "{") ||
        (string[i] == "]" && stack[stack.length - 1] === "[")
      ) {
        stack.pop();
      }
    }
    // return false;
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
var string = "{[({}){]}";
console.log("is balanced", checkIsParentheses(string));
