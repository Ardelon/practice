const { posts } = require("../utilities/object");

const userCountOne = (obj) => {
  const userList = [];

  for (let index = 0; index < obj.length; index++) {
    if (!userList.includes(obj[index].userId)) {
      userList.push(obj[index].userId);
    }
  }
  return userList.length;
};

console.time("starting");
console.log("Start Functions");
console.timeEnd("starting");

console.time("userCountOne");
const outputOne = userCountOne(posts);
console.timeEnd("userCountOne");
console.log(outputOne);
