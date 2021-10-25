// CommonJS, every file in node is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
// console.log(names);

const sayHi = require("./5-utils");

const myPerson = require("./6-alternativeFlavor");

// console.log(myPerson);

require("./7-mindGrenade");

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);
