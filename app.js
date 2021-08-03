// Imports of express
const express = require("express");
const { restart } = require("nodemon");
const bodyParser = require('body-parser');
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// const User = require("./model/user");
require("dotenv/config");
// app.use(express.json());


// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// listen for requests
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// ........

// Require User routes
require('./routes/user.routes.js')(app);

// ........

// define a simple route
app.get('/', (req, res) => {
  res.json({"message": "Welcome to Ecommerce application."});
});

// app.get("/users", (req, res) => {

//   try {
//   } catch (error) {}

//   let users = {
//     name: "Pedro",
//     email: "pedromaironi@gmail.com",
//   };
//   res.send(
//     JSON.stringify({
//       users: users,
//     })
//   );
// });

// app.post("/create_user", async (req, res) => {
//   //   console.log(req.body.name);
//   try {
//     const myUser = new User(req.body);
//     await myUser.save();
//     res.send(myUser);
//   } catch (error) {
//     res.send({ message: error });
//   }
// });

// mogoose.connect(
//   process.env.DB_CONNECTION_STRING,
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   (req, res) => {
//     console.log("Connected to the mongodb");
//   }
// );

// app.listen(process.env.PORT, () => {
//   console.log(`Listener at ${process.env.PORT}`);
// });
