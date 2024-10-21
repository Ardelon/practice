const mockData = require("../mockData/mockData1.json");

const getUsersByAgeOne = (obj, age) => {
  const filteredUsers = [];
  for (let index = 0; index < obj.length; index++) {
    if (obj[index].age > age) {
      filteredUsers.push(obj[index]);
    }
  }
  return filteredUsers;
};

const getUsersByAgeTwo = (obj, age) => {
  return obj.filter((user) => user.age > age);
};

console.time("getUsersByAgeOne");
const length = getUsersByAgeOne(mockData, 30).length;
console.timeEnd("getUsersByAgeOne");

console.time("getUsersByAgeTwo");
const length2 = getUsersByAgeTwo(mockData, 30).length;
console.timeEnd("getUsersByAgeTwo");
console.log(length, length2);
