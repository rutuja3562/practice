function powerOfTwo(n) {
  if (n <= 0) {
    return `${n} is not a power of two`;
  }

  while (n % 2 === 0) {
    n = n / 2;
  }

  if (n === 1) {
    return `${n} is power of two`;
  } else {
    return `${n} is not power of two`;
  }
}

console.log(powerOfTwo(8)); // Output: "1 is power of two"
console.log(powerOfTwo(10)); // Output: "5 is not power of two"
