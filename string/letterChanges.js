const { medium1, lorem1 } = require("../utilities/string");
// TODO change selected letters in the string
const letterChangesOne = (str, previousLetter, newLetter) => {
  const splittedStr = str.split(previousLetter);
  const newStr = splittedStr.join(newLetter);
  //   console.log(newStr);
};

const letterChangesTwo = (str, previousLetter, newLetter) => {
  let newStr = "";
  for (let index = 0; index < str.length; index++) {
    if (str[index] === previousLetter) {
      newStr += str.slice(newStr.length, index) + newLetter;
    } else if (index === str.length - 1) {
      newStr += str.slice(newStr.length, index);
    }
  }
  //   console.log(newStr);
};

console.time("letterChangesOne");
letterChangesOne(lorem1, "a", "e");
letterChangesOne(medium1, "o", "u");
console.timeEnd("letterChangesOne");

console.log(" ");

console.time("letterChangesTwo");
letterChangesTwo(lorem1, "a", "e");
letterChangesTwo(medium1, "o", "u");
console.timeEnd("letterChangesTwo");
