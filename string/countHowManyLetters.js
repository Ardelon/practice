const { alphabet, lorem1, medium1 } = require("../utilities/string");

const countHowManyLettersOne = (str) => {
  const letters = {};

  const lowStr = str.toLowerCase();

  for (let index = 0; index < lowStr.length; index++) {
    if (
      letters[lowStr[index]] === undefined &&
      alphabet.includes(lowStr[index])
    ) {
      letters[lowStr[index]] = 1;
    } else if (alphabet.includes(lowStr[index])) {
      letters[lowStr[index]] += 1;
    }
  }
  console.log(letters);
};

const countHowManyLettersTwo = (str) => {
  const charArray = str.toLowerCase().split("");

  const obj = {};

  for (let index = 0; index < charArray.length; index++) {
    if (alphabet.includes(charArray[index])) {
      obj[charArray[index]] === undefined
        ? (obj[charArray[index]] = 1)
        : (obj[charArray[index]] += 1);
    }
  }
  console.log(obj);
};

console.time("starting");
console.log("Start Functions");
console.timeEnd("starting");

console.time("countHowManyLettersOne");
countHowManyLettersOne(lorem1);
countHowManyLettersOne(medium1);
console.timeEnd("countHowManyLettersOne");

console.log(" ");
console.time("countHowManyLettersTwo");
countHowManyLettersTwo(lorem1);
countHowManyLettersTwo(medium1);
console.timeEnd("countHowManyLettersTwo");
