// OS Module, built-in Module, for interacting
// with server and operating system
// no ./ because it is a built-in module

const os = require("os");

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
console.log(`The system uptime is  ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
