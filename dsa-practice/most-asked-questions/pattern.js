function pattern(n) {
  for (var i = 0; i < n; i++) {
    var bag = "";
    for (var j = i; j < n; j++) {
      bag += "*";
    }
    console.log(bag);
  }
}
pattern(5);
console.log("");
console.log(
  "***------------------------------------------------------------------***"
);
console.log("");
function pattern1(n) {
  for (var i = 0; i < n; i++) {
    var bag = "";
    for (var j = n - 1; j >= 0; j--) {
      bag += "*";
    }
    console.log(bag);
  }
}
pattern1(5);
