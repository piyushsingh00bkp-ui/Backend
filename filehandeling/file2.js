const req = require("fs");
//blocking request
const result = req.readFileSync("text.txt", "utf-8");
console.log(result);
