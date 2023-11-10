const { alphabet, spacedString } = require("../utilities/string");
// TODO remove unnecessary spaces

const removeUnnecessarySpacesOne = (str) => {
  const charArray = str.toLowerCase().split("");
  const newCharArr = [];
  let shouldRemove = false;
  for (let index = 0; index < charArray.length; index++) {
    if (charArray[index] === "\n") continue;
    if (newCharArr.length === 0 && charArray[index] === " ") continue;
    if (charArray[index] === " " && !shouldRemove) {
      shouldRemove = true;
      newCharArr.push(charArray[index]);
    } else if (charArray[index] === " " && shouldRemove) {
      continue;
    } else {
      newCharArr.push(charArray[index]);
      shouldRemove = false;
    }
  }
  return newCharArr.join("");
};

const removeUnnecessarySpacesTwo = (str) => {
  const charArray = str.trim().split("");
  const newArr = [];
  let shouldRemove = false;
  for (let index = 0; index < charArray.length; index++) {
    if (charArray[index] === "\n") continue;
    if (charArray[index] === " " && !shouldRemove) {
      newArr.push(charArray[index]);
      shouldRemove = true;
    } else if (charArray[index] === " " && shouldRemove) {
      continue;
    } else {
      newArr.push(charArray[index]);
      shouldRemove = false;
    }
  }

  return newArr.join("");
};

console.time("starting");
console.log("Start Functions");
console.timeEnd("starting");

console.time("removeUnnecessarySpacesOne");
const str1 = removeUnnecessarySpacesOne(spacedString);
console.timeEnd("removeUnnecessarySpacesOne");
// console.log(str1);
console.time("removeUnnecessarySpacesTwo");
const str2 = removeUnnecessarySpacesTwo(spacedString);
console.timeEnd("removeUnnecessarySpacesTwo");
// console.log(str2);
