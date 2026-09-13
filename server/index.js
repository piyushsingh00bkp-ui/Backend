const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New Request Recived\n `;
  const myurl = url.parse(req.url, true);

  fs.appendFile("log.txt", log, (err, data) => {
    // console.log(req);
    // res.end("Hello from server");
    switch (myurl.pathname) {
      case "/":
        if (req.method === "GET") res.end("Home Page");
        break;
      case "/about":
        const username = myurl.query.myname;
        res.end(`hii ${username}`);
        // res.end("About Us");
        break;
      case "/search":
        const result = myurl.query.search_result;
        res.end("Here are your results " + result);
        break;
      case "/signup":
        if (req.method === "GET") res.end("This is you form");
        else if (req.method === "POST") {
          //db query to storre the form
          res.end("Success");
        }
      default:
        res.end("404 not found");
    }
  });
});
myServer.listen(8000, () => {
  console.log("Server Started ");
});
