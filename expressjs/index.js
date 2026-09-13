const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page hey" + req.query.name);
});

app.get("/signup", (req, res) => {
  res.send("Signup Page");
});

app.post("/signup", (req, res) => {
  res.send("Signup successful");
});

app.listen(8000, () => {
  console.log("Server started at port", 8000);
});
