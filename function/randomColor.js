const generateColorOne = () => {
  const arr = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6];
  let hexCode =
    "" +
    arr[Math.round(Math.random() * 11)] +
    arr[Math.round(Math.random() * 11)] +
    arr[Math.round(Math.random() * 11)] +
    arr[Math.round(Math.random() * 11)] +
    arr[Math.round(Math.random() * 11)] +
    arr[Math.round(Math.random() * 11)];
  return hexCode;
};

const generateColorTwo = () => {
  const arr = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6];
  const hexCode = `${arr[Math.round(Math.random() * 11)]}${
    arr[Math.round(Math.random() * 11)]
  }${arr[Math.round(Math.random() * 11)]}${
    arr[Math.round(Math.random() * 11)]
  }${arr[Math.round(Math.random() * 11)]}${
    arr[Math.round(Math.random() * 11)]
  }`;
  return hexCode;
};
const generateColorThree = () => {
  const arr = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6];
  const hexCode = [
    arr[Math.round(Math.random() * 11)],
    arr[Math.round(Math.random() * 11)],
    arr[Math.round(Math.random() * 11)],
    arr[Math.round(Math.random() * 11)],
    arr[Math.round(Math.random() * 11)],
    arr[Math.round(Math.random() * 11)],
  ].join("");
  return hexCode;
};
const generateColorFour = () => {
  const arr = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6];
  const hexCode = Array(6)
    .fill()
    .map(() => arr[Math.round(Math.random() * 11)])
    .join("");
  return hexCode;
};

const generateColorFive = () => {
  const arr = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6];
  const newArr = [];
  for (let index = 0; index < 6; index++) {
    newArr.push(arr[Math.round(Math.random() * 11)]);
  }
  return newArr.join("");
};
const generateColorSix = () => {
  const arr = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6];
  let hexCode = ``;
  for (let index = 0; index < 6; index++) {
    hexCode += arr[Math.round(Math.random() * 11)];
  }
  return hexCode;
};

console.time("starting");
console.log("Start Functions");
console.timeEnd("starting");

console.time("generateColorOne");
generateColorOne();
console.timeEnd("generateColorOne");

console.log(" ");

console.time("generateColorTwo");
generateColorTwo();
console.timeEnd("generateColorTwo");

console.log(" ");

console.time("generateColorThree");
generateColorThree();
console.timeEnd("generateColorThree");

console.log(" ");

console.time("generateColorFour");
generateColorFour();
console.timeEnd("generateColorFour");

console.log(" ");

console.time("generateColorFive");
generateColorFive();
console.timeEnd("generateColorFive");

console.log(" ");

console.time("generateColorSix");
generateColorSix();
console.timeEnd("generateColorSix");
