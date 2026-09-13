//IO polling
const req = require("fs");
setTimeout(() => {
  console.log("Hello Form timer 1");
}, 0); // this will be printed 2nd even after we have  a setImm already bcz this will alrrady expired
setImmediate(() => {
  console.log("I Will be 2nd ");
});

req.readFile("did.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Io polling finsihesd");
    console.log(result);
  }
});
