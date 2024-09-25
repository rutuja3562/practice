function countPrimeNumbers(n) {
  var primeNumbers = 0;
  for (var i = 2; i < n; i++) {
    var isPrime = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        var isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeNumbers++;
    }
  }
  return primeNumbers;
}

console.log(countPrimeNumbers(10));
