const { medium1, lorem1 } = require("../utilities/string");

// TODO take a string and reverse the order of words
const reverseOrderOfWordsOne = (str) => {
  const trimmedStr = str.split(" ");
  const reverseOrder = [];
  for (let i = trimmedStr.length; i > 0; i--) {
    if (
      trimmedStr[i] !== "\n" ||
      trimmedStr[i] !== undefined ||
      trimmedStr[i] !== null
    ) {
      reverseOrder.push(trimmedStr[i]);
    }
  }
  reversedStr = reverseOrder.join(" ");
  console.log(reversedStr);
};

console.time("reverseOrderOfWords");
reverseOrderOfWordsOne(lorem1);
reverseOrderOfWordsOne(medium1);
console.timeEnd("reverseOrderOfWords");
