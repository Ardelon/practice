const generateSortedNumbersOne = (length) => {
  const arr = [];

  for (let index = 0; index < length; index++) {
    arr.push(Math.ceil((Math.random() + index) * 100));
  }

  console.log(arr);
};

generateSortedNumbersOne(100);
