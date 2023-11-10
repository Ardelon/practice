const generateNumbersOne = () => {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(
      Math.round(Math.random()) ? Math.random() * 100 : -Math.random() * 100
    );
  }
  return arr;
};

module.exports = { generateNumbersOne };
