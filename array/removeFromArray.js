const { generateNumbersOne } = require("./generateNumbers");

const removeFromArrayOne = (arr) => {
  arr.splice(3, 1);
  console.log(arr);
  arr.splice(3, 1);
  console.log(arr);
};

removeFromArrayOne([1, 2, 3, 4, 5, 6]);
