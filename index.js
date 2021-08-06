// Imports of express
const express = require("express");
const { restart } = require("nodemon");
const bodyParser = require("body-parser");
const cors = require('cors');

// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: '*'
}));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// const User = require("./model/user");
require("dotenv/config");

// app.use(express.json());

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// listen for requests
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening on port 5000");
});

// ........

// Require User routes
require("./routes/user.routes.js")(app);
require("./routes/categories.routes.js")(app);

// ........

// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Ecommerce application." });
});
