// Import express
const express = require('express');

const cors = require("cors");

// Import Body parser
const bodyParser = require('body-parser');

// Import Mongoose
const mongoose = require('mongoose');

// Initialise the app
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true }));

require("dotenv/config");

app.use(express.json());

app.use(cors());

// Configuring the database
const dbConfig = require("./config/database.config.js");
// Import routes
const apiRoutes = require("./routes/api-routes.js");

// app.use(
//   cors({
//     origin: "*",
//   })
// );



// const User = require("./model/user");


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

var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 5000;


// ........

// Require User routes
// require("./routes/user.routes.js")(app);
// require("./routes/categories.routes.js")(app);

// ........

// define a simple route
app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce application.");
});

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestApi on port " + port);
});