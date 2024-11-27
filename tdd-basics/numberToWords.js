// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const test = (testCase, result, expected_result) => {
  if (JSON.stringify(result) !== JSON.stringify(expected_result)) {
    console.error(
      `Fail: ${testCase} , Got: ${JSON.stringify(
        result
      )} , Expected: ${JSON.stringify(expected_result)}`
    );
  } else console.log(`Pass: ${testCase}`);
};

const getDigitAt = (d, n) =>
  n.toString().length >= d ? parseInt(n.toString().substr(-d, 1)) : undefined;

const twentyToNinetyNine = (number) => {
  let tensDigit = getDigitAt(2, number);
  return [
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
  ][tensDigit];
};

const tenToNineteen = (number) => {
  if (number >= 10 && number <= 19) {
    return [
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
    ][number - 10];
  } else return undefined;
};
const oneToNine = (number) => {
  let tensDigit = getDigitAt(2, number);
  let onesDigit = getDigitAt(1, number);

  if (tensDigit !== 1)
    return [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ][onesDigit];
  else return undefined;
};
const zero = (number) => {
  return number == 0 ? "zero" : undefined;
};
const notEmptyString = (s) => s !== "";
const notUndefined = (s) => s !== undefined;
const combineWords = (arr) => arr.join(" ");
const filterUndefined = (arr) => arr.filter(notUndefined);
const toTitleCase = (word) =>
  word[0].toUpperCase() + word.substr(1).toLowerCase();
const phraseToTitleCase = (phrase) =>
  phrase.split(" ").filter(notEmptyString).map(toTitleCase).join(" ");

const numToWord = (number) => {
  // return combineWords(filterUndefined([twentyToNinetyNine(number), tenToNineteen(number), oneToNine(number), zero(number)]));
  let segments = [
    twentyToNinetyNine(number),
    tenToNineteen(number),
    oneToNine(number),
    zero(number),
  ];
  return pipe(filterUndefined, combineWords, phraseToTitleCase)(segments);
};

const pipe =
  (...fns) =>
  (arg) => {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, arg);
  };

test("numToWord(0) === 'zero'", numToWord(0), "Zero");
test("numToWord(1) === 'one'", numToWord(1), "One");
test("numToWord(8) === 'eight'", numToWord(8), "Eight");
test("numToWord(10) === 'ten'", numToWord(10), "Ten");
test("numToWord(15) === 'fifteen'", numToWord(15), "Fifteen");
test("numToWord(97) === 'ninety seven'", numToWord(97), "Ninety Seven");
