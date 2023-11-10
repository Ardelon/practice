const { generateNumbersOne } = require("./generateNumbers");

const numbers = generateNumbersOne();

const sortNumbersOne = (arr) => {
  const sortedArr = [];

  for (let index1 = 0; index1 < arr.length; index1++) {
    let smallest = Infinity;
    for (let index2 = 0; index2 < arr.length; index2++) {
      if (smallest > arr[index2] && !sortedArr.includes(arr[index2])) {
        smallest = arr[index2];
      }
    }
    sortedArr.push(smallest);
  }
  console.log(sortedArr);
};

const sortNumbersTwo = (arr) => {
  let willContinue = true;
  while (willContinue) {
    let isTriggered = false;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > arr[index + 1]) {
        let a = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = a;
        if (!isTriggered) {
          isTriggered = true;
        }
      }
    }
    if (!isTriggered) {
      willContinue = false;
    }
  }
  console.log(arr);
};

const sortNumbersThree = (arr) => {
  console.log(arr.sort());
};

const sortNumbersFour = (arr) => {
  console.log(
    arr.sort(function (a, b) {
      return a - b;
    })
  );
};

console.time("starting");
console.log("Start Functions");
console.timeEnd("starting");

console.time("sortNumbersOne");
sortNumbersOne(numbers);
console.timeEnd("sortNumbersOne");

console.log(" ");

console.time("sortNumbersTwo");
sortNumbersTwo(numbers);
console.timeEnd("sortNumbersTwo");

console.log(" ");

console.time("sortNumbersThree");
sortNumbersThree(numbers);
console.timeEnd("sortNumbersThree");

console.log(" ");

console.time("sortNumbersFour");
sortNumbersFour(numbers);
console.timeEnd("sortNumbersFour");
