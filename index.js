const cors = require("cors");
// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();
// Configuring the database
const dbConfig = require("./config/database.config.js");
// Import routes
let apiRoutes = require("./routes/api-routes.js");

app.use(
  cors({
    origin: "*",
  })
);

// parse requests of content-type - application/json
app.use(bodyParser.json());

// const User = require("./model/user");
// require("dotenv/config");


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