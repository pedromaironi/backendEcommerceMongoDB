// Imports of express
const express = require("express");
const { restart } = require("nodemon");
const app = express();
const mogoose = require("mongoose");
require("dotenv/config");
const User = require("./model/user");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("First request!!!");
});

app.get("/users", (req, res) => {
  let users = {
    name: "Pedro",
    email: "pedromaironi@gmail.com",
  };
  res.send(
    JSON.stringify({
      users: users,
    })
  );
});

app.post("/create_user", async (req, res) => {
//   console.log(req.body.name);
  try {
    const myUser = new User(req.body);
    await myUser.save();
    res.send(myUser);
  } catch (error) {
      res.send({"message": error});
  }
});

mogoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("Connected to the mongodb");
  }
);

app.listen(process.env.PORT, () => {
  console.log(`Listener at ${process.env.PORT}`);
});
