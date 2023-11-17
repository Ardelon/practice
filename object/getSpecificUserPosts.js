const { posts } = require("../utilities/object");

const getSpecificUserPostsOne = (obj, id) => {
  const filteredPosts = [];
  for (let index = 0; index < obj.length; index++) {
    if (obj[index].userId === id) {
      filteredPosts.push(obj[index]);
    }
  }
  return filteredPosts;
};

console.time("starting");
console.log("Start Functions");
console.timeEnd("starting");

console.time("getSpecificUserPostsOne");
const outputOne = getSpecificUserPostsOne(posts, 5);
console.timeEnd("getSpecificUserPostsOne");
console.log(outputOne);
