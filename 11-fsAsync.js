// Fs Module
// async : non blocking ,have to provide callback when functionality is complete
// sync : blocking

// async approach creates callback hell

const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}; ${second} `,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("writeFile result");
      }
    );
  });
});
console.log("starting next task");

//alternatives : using promises and async await
