const { randomNumbers1000 } = require("../utilities/array");
const sumReducer = (accumulator, currentValue) => {
  if (accumulator > 0) {
    return accumulator - currentValue;
  } else {
    return accumulator + currentValue;
  }
};

const sum = randomNumbers1000.reduce(sumReducer);

console.log(sum);
