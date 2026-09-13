const fs = require("fs");

//Synchronous
// fs.writeFileSync("text.txt", "Hey there");

//Asynchronous
// fs.writeFile("Himu.txt", "Fuck off", (err) => {});
// const res = fs.readFileSync("cont.txt", "utf-8");
// console.log(res);
// const tes = fs.readFile("./cont.txt", "utf-8", (err, tes) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log(tes);
//   }
// });
// fs.appendFileSync("./Himu.txt", new Date.getDate().toLocalString());

console.log("Before append");

try {
  // Appends the text and a newline character to 'log.txt'
  fs.appendFileSync("log.txt", "This is a new log entry.\n", "utf8");
  console.log("Data successfully appended!");
} catch (err) {
  // Always wrap sync operations in try/catch to handle errors (like permission issues)
  console.error("Error appending to file:", err);
}

console.log("After append");
