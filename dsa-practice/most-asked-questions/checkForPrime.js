function isPrime(n) {
  var c = 0;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      c++;
    }
  }
  if (c == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("Is Prime", isPrime(10));
