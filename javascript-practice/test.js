function test(testcase,a1,a2){
if(JSON.stringify(a1)!==JSON.stringify(a2)){
    console.log(`FIAL ${testcase}`)
}
else console.log(`PASSED ${testcase}`)
}

function map(a,fn){
return a.map(fn)
}

test(
  "map([1, 2, 3], x => x * 2) === [2, 4, 6]",
  map([1, 2, 3], (x) => x * 2),
  [2, 4, 9]
);


function test(testCase, result, expected_result) {
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
function twentyToNinety(number) {
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
        "ninety"
    ][tensDigit];
}
function tenToNineteen(number) {
    if(number >= 10 && number <= 19) {
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
            "nineteen"
        ][number - 10];
    } else return undefined;
}
function ones(number) {
    let onesDigit = getDigitAt(1, number);
    let tensDigit = getDigitAt(2, number);
    if(tensDigit !== 1)
        return [
            undefined,
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine"
        ][onesDigit];
    else return undefined;
}
const zero = number => number === 0 ? "zero" :  undefined;
const notUndefined = x =>x !== undefined;
const notEmptyString = s => s !== "";
const combineWords = arr => arr.join(" ");
const filterUndefined = arr => arr.filter(notUndefined);
const toTitleCase = word => word[0].toUpperCase() + word.substr(1).toLowerCase();
const phraseToTitleCase = phrase => phrase.split(" ").filter(notEmptyString).map(toTitleCase).join(" ");
const pipe = (...fns) => (arg) => {
    return fns.reduce((acc, fn)=> {
        return fn(acc);
    }, arg);
};

function numToWord(number) {
    let segments = [ 
        twentyToNinety(number),
        tenToNineteen(number),
        ones(number),
        zero(number)
    ]
    // return toTitleCase(combineWords(filterUndefined(segments));

    return pipe (
        filterUndefined,
        combineWords,
        phraseToTitleCase
    ) (segments);
}


test("numToWord(0) === 'Zero'", numToWord(0), 'Zero');
test("numToWord(1) === 'One'", numToWord(1), 'One');
test("numToWord(9) === 'Nine'", numToWord(9), 'Nine');
test("numToWord(10) === 'Ten'", numToWord(10), 'Ten');
test("numToWord(15) === 'Fifteen'", numToWord(15), 'Fifteen');
test("numToWord(20) === 'Twenty'", numToWord(20), 'Twenty');
test("numToWord(21) === 'Twenty One'", numToWord(21), 'Twenty One');
test("numToWord(95) === 'Ninety Five'", numToWord(95), 'Ninety Five');


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Hello, World!");
function test(testCase, result, expected_result) {
  if (JSON.stringify(result) !== JSON.stringify(expected_result)) {
    console.error(
      `Fail: ${testCase} , Got: ${JSON.stringify(
        result
      )} , Expected: ${JSON.stringify(expected_result)}`
    );
  } else console.log(`Pass: ${testCase}`);
};
function tenToNineteen(number) {
    if(number >= 10 && number <= 19) {
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
            "nineteen"
        ][number - 10];
    } else return undefined;
}
function oneToNine(number){
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
            "nine"
    ][number%10]
}
const numToWord=(number)=>{
  return [oneToNine(number) ].join(" ")
}
test("numToWord(0) === 'zero'", numToWord(0), 'zero');
test("numToWord(1) === 'one'", numToWord(1), 'one');
test("numToWord(eight) === 'eight'", numToWord(8), 'eight')
test("numToWord(ten) === 'ten'", numToWord(10), 'ten')