const ifTimerOne = (thisManyTimes) => {
  for (let index = 0; index < thisManyTimes; index++) {
    if (true) {
    }
  }
};

console.time("starting");
console.log("Start Functions");
console.timeEnd("starting");

console.time("ifTimerOne100");
ifTimerOne(100);
console.timeEnd("ifTimerOne100");
console.time("ifTimerOne1000");
ifTimerOne(1000);
console.timeEnd("ifTimerOne1000");
console.time("ifTimerOne10000");
ifTimerOne(10000);
console.timeEnd("ifTimerOne10000");
console.time("ifTimerOne100000");
ifTimerOne(100000);
console.timeEnd("ifTimerOne100000");
