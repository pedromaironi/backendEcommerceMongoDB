// UserController.js
// Import User model
users = require("../model/user.model");

// Handle index actions
exports.index = function (req, res) {
  users.get(function (err, users) {
    if (err) {
      res.json({
        status: "error a",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "User retrieved successfully",
      data: users,
    });
  });
};

// Handle create users actions
exports.new = function (req, res) {
  // Validate request
  if (!req.body.email && !req.body.name && !req.body.password) {
    return res.status(400).send({
      message: "User email can not be empty",
    });
  }

  const user = new users({
    name: req.body.name || "Untitled Username",
    email: req.body.email,
    password: req.body.password,
  });

  // save the user and check for errors
  user.save(function (err) {
    res.json({
      message: "New user created!",
      data: user,
    });
  });
};

// Handle view User info
exports.view = function (req, res) {
  users.findById(req.params.usersId, function (err, user) {
    if (err) res.send(err);
    res.json({
      message: "Users details loading..",
      data: user,
    });
  });
};

exports.update = function (req, res) {
  users.findById(req.params.usersId, function (err, user) {
    // Validate request
    if (!req.body.email && !req.body.name && !req.body.password) {
      return res.status(400).send({
        message: "User email can not be empty",
      });
    }

    user.name = req.body.name ? req.body.name : user.name;
    user.password = req.body.password;
    user.email = req.body.email;

    // save the users and check for errors
    user.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "users Info updated",
        data: user,
      });
    });
  });
};

// Handle delete users
exports.delete = function (req, res) {
  users.findByIdAndDelete(req.params.usersId, function (err, user) {
    // deleting the users and check for errors
    res.json({
      message: "users deleted",
      data: user,
    });
  });
};

exports.signup = function (req, res) {
  // Validate request
  users.find(req.params.usersId, function (err, user) {

  });

  if (!req.body.email && !req.body.name && !req.body.password) {
    return res.status(400).send({
      message: "User can not be empty",
    });
  }

  user = new users({
    name: req.body.name || "Untitled Username",
    email: req.body.email,
    password: req.body.password,
  });

  // save the user and check for errors
  user.save(function (err) {
    res.json({
      message: "Welcome to my app!",
      data: user,
    });
  });
};

exports.signIn = function (req, res) {
  // Validate request
  if (!req.body.email && !req.body.password) {
    return res.status(400).send({
      message: "User can not be empty",
    });
  }

  user = new users({
    email: req.body.email,
    password: req.body.password,
  });

  // save the user and check for errors
  user.save(function (err) {
    res.json({
      message: "Welcome to my app!",
      data: user,
    });
  });
};

// Handling user signup
// app.post("/register", function (req, res) {
//   User.register(
//     new User({ username: username }),
//     password,
//     function (err, user) {
//       if (err) {
//         console.log(err);
//         return res.render("register");
//       }

//       passport.authenticate("local")(req, res, function () {
//         res.render("secret");
//       });
//     }
//   );
// });
