const express = require("express");
const users = require("./user.json");
const app = express();
const PORT = 8000;
const fs = require("fs");
// Middle ware plugin
app.use(express.urlencoded({ extended: false }));
app.listen(PORT, () => {
  console.log("Server Started at port 8000");
});
app.get("/api/users", (req, res) => {
  return res.json(users);
});
app.get("/users", (req, res) => {
  const html = `<ul>
    
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
   
    </ul>`;
  res.send(html);
});

// is not a good to do post bcz you need to write alot of code
// app.post("/api/users/", (req, res) => {
//   // TODO : Create new user
//   const body = req.body;
//   // console.log("Body", body);
//   users.push({
//     id: users.length + 1,
//     first_name: body.first_name,
//     last_name: body.last_name,
//     email: body.email,
//     gender: body.gender,
//     job_title: body.job_title,
//   });
// });
app.post("/api/users/", (req, res) => {
  const body = req.body;
  users.push({ ...body, id });
  fs.writeFile("user.json",)
});
//for get patch delete almost the routes is smae so we use soemthing diff
// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// app.patch("./api/users/:id", (req, res) => {
//   // TODO : Edit the user
//   res.json({
//     status: "pending",
//   });
// });
// app.delete("./api/users/:id", (req, res) => {
//   // TODO : delete the user with that id
//   res.json({
//     status: "pending",
//   });
// });
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    return res.json(user);
  })

  .patch((req, res) => {
    // TODO: Edit the user

    res.json({
      status: "pending",
    });
  })

  .delete((req, res) => {
    // TODO: Delete the user

    res.json({
      status: "pending",
    });
  });
