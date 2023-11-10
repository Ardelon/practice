const { generateNumbersOne } = require("./generateNumbers");

const removeNegativesOne = (arr) => {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) newArr.push(arr[index]);
  }
  console.log(newArr);
};

const removeNegativesTwo = (arr) => {
  const newArr = arr.filter((number) => {
    return number > 0;
  });
  console.log(newArr);
};

console.time("starting");
console.log("Start Functions");
console.timeEnd("starting");
console.time("removeNegativesOne");
removeNegativesOne(generateNumbersOne());
console.timeEnd("removeNegativesOne");

console.log(" ");

console.time("removeNegativesOne");
removeNegativesTwo(generateNumbersOne());
console.timeEnd("removeNegativesOne");
