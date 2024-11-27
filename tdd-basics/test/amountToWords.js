// console.log(amountToWords(20));
// console.log(amountToWords(26));
// console.log(amountToWords(99));
// console.log(amountToWords(1.6));
// console.log(amountToWords(0));
// console.log(amountToWords(100));
// console.log(amountToWords(936));
// console.log(amountToWords(4000));
// console.log(amountToWords(4200));
// console.log(amountToWords(4253));
// console.log(amountToWords(12345.67));
// console.log(amountToWords(20345.47));

// // Output:
// // Twenty
// // Twenty Six
// // Ninety Nine
// // Two
// // Zero
// // One Hundred
// // Nine Hundred and Thirty Six
// // Four Thousand
// // Four Thousand and Two Hundred
// // Four Thousand, Two Hundred and Fifty Three
// // Twelve Thousand, Three Hundred and Forty Six
// // Twelve Thousand, Three Hundred and Forty Five

// function amountToWords(amount) {
//   // Implement this function
//   let ones = [
//     "",
//     "One",
//     "Two",
//     "Three",
//     "Four",
//     "Five",
//     "Six",
//     "Seven",
//     "Eight",
//     "Nine",
//   ];
//   let tens = [
//     "",
//     "Ten",
//     "Twenty",
//     "Thirty",
//     "Forty",
//     "Fifty",
//     "Sixty",
//     "Seventy",
//     "Eighty",
//     "Ninety",
//   ];
//   let teens = [
//     "",
//     "Eleven",
//     "Twelve",
//     "Thirteen",
//     "Fourteen",
//     "Fifteen",
//     "Sixteen",
//     "Seventeen",
//     "Eighteen",
//     "Nineteen",
//   ];

//   if (typeof amount !== "number") {
//     return "Invalid";
//   }
//   if (amount === 0) {
//     return "Zero";
//   } else if (amount < 10) {
//     return ones[amount];
//   } else if (amount < 20) {
//     if (amount === 10) return tens[1];
//     return teens[amount - 11];
//   } else if (amount < 100) {
//     return `${tens[Math.floor(amount / 10)]}${
//       amount % 10 !== 0 ? " " + ones[amount % 10] : ""
//     }`;
//   } else if (amount < 1000) {
//     return `${ones[Math.floor(amount / 100)]} Hundred${
//       amount % 100 === 0 ? "" : " and "
//     }${amountToWords(amount % 100)}`;
//   } else if (amount < 10000) {
//     return `${amountToWords(Math.floor(amount / 1000))} Thousand${
//       amount % 1000 === 0 ? "" : ", "
//     }${amountToWords(amount % 1000)}`;
//   } else if (amount < 100000) {
//     return `${amountToWords(Math.floor(amount / 1000))} Thousand${
//       amount % 1000 === 0 ? "" : ", "
//     }${amountToWords(amount % 1000)}`;
//   } else if (amount < 1000000) {
//     return `${amountToWords(Math.floor(amount / 100000))} Lakh${
//       amount % 100000 === 0 ? "" : ", "
//     }${amountToWords(amount % 100000)}`;
//   }
// }

// getDigitAt(9876, 3) >> 8
// getDigitAt(9876, 1) >> 6
const getDigitAt = (d, n) =>
  n.toString().length >= d ? parseInt(n.toString().substr(-d, 1)) : undefined;

// For readable code
const onesPositionOf = getDigitAt.bind(undefined, 1);
const tensPositionOf = getDigitAt.bind(undefined, 2);
const hundredsPositionOf = getDigitAt.bind(undefined, 3);
const thousandsPositionOf = getDigitAt.bind(undefined, 4);
const tenThousandsPositionOf = getDigitAt.bind(undefined, 5);
const getThousands = (number) =>
  tenThousandsPositionOf(number).toString() +
  thousandsPositionOf(number).toString();

// Returns i-th element from a.
// undefined is returned if i is out of array's bounds.
const getElementAt = (i, a) => (i >= 0 && i < a.length ? a[i] : undefined);

// Only for >= 20000
const tenThousands = (number) =>
  tenThousandsPositionOf(number) >= 2
    ? tens(getThousands(number)) + " thousand"
    : undefined;

// Only for 10 to 19
const tenToNineteenThousands = (number) =>
  tenThousandsPositionOf(number) === 1
    ? tenToNineteen(getThousands(number)) + " thousand"
    : undefined;

// Thousands, except for 10 to 19 thousands
const thousands = (number) =>
  tenThousandsPositionOf(number) === 1
    ? undefined
    : thousandsPositionOf(number) > 0
    ? ones(thousandsPositionOf(number)) + " thousand"
    : undefined;

// Hundreds
const hundreds = (number) =>
  hundredsPositionOf(number) > 0
    ? ones(hundredsPositionOf(number)) + " hundred"
    : undefined;

// Only for 20 and above
const tens = (number) =>
  getElementAt(tensPositionOf(number), [
    undefined,
    undefined,
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ]);

// Only for 10 to 19
const tenToNineteen = (number) =>
  tensPositionOf(number) === 1
    ? getElementAt(onesPositionOf(number), [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
      ])
    : undefined;

// Only ones, excluding 11 to 19
const ones = (number) =>
  tensPositionOf(number) === 1
    ? undefined
    : getElementAt(onesPositionOf(number), [
        undefined,
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ]);

// Only if 0
const zero = (number) => (number === 0 ? "zero" : undefined);

// zero >> Zero etc.
const toWordTitleCase = (word) =>
  word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();

// Return true if word is not an empty string or undefined
const isNotEmpty = (word) => !!word && word.length > 0;

// one hundred >> One Hundred
const toTitleCase = (phrase) =>
  phrase.split(" ").filter(isNotEmpty).map(toWordTitleCase).join(" ");

// Return true if x is not undefined
const notUndefined = (x) => x !== undefined;

// Last one will be "and", else ","
const getSectionDelimiter = (index, arr) =>
  index === arr.length - 1 ? " and " : ", ";

// Reducer function to combine sections
const combineWithDelimiter = (combined, word, index, arr) =>
  isNotEmpty(combined)
    ? combined + getSectionDelimiter(index, arr) + word
    : word;

// Convert the segment to a phrase
const flattenSegment = (segment) =>
  segment.filter(notUndefined).map(toTitleCase).join(" ");

// Converts the given positive integer to words.
// 0 <= number <= 99999
const numberToWord = (number) => {
  // Segments: thousands, hundreds, tens and ones
  const segments = [
    [tenThousands(number), tenToNineteenThousands(number), thousands(number)],
    [hundreds(number)],
    [tens(number), tenToNineteen(number), ones(number), zero(number)],
  ];
  // console.log(number, segments);
  return segments
    .map(flattenSegment)
    .filter(isNotEmpty)
    .reduce(combineWithDelimiter, "");
};

// Tests
console.log(numberToWord(0));
console.log(numberToWord(1));
console.log(numberToWord(5));
console.log(numberToWord(9));
console.log(numberToWord(10));
console.log(numberToWord(15));
console.log(numberToWord(19));
console.log(numberToWord(20));
console.log(numberToWord(25));
console.log(numberToWord(55));
console.log(numberToWord(98));
console.log(numberToWord(100));
console.log(numberToWord(101));
console.log(numberToWord(145));
console.log(numberToWord(909));
console.log(numberToWord(1000));
console.log(numberToWord(1001));
console.log(numberToWord(1206));
console.log(numberToWord(9999));
console.log(numberToWord(10000));
console.log(numberToWord(10111));
console.log(numberToWord(19999));
console.log(numberToWord(20000));
console.log(numberToWord(50504));
