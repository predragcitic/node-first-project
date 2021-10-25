// Fs Module
// async : non blocking
//sync : blocking

const { readFileSync, writeFileSync, write } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync("./content/result-sync.txt", "Hello this is new txt file", {
  flag: "a",
});

console.log("done with task");
console.log("starting with next one");

// const third = readFileSync("./content/result-sync.txt", "utf-8");
// // const third = readFileSync('./content/result-sync.txt')
// console.log(first, second, third);
