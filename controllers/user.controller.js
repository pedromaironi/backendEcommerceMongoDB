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
  Users.findById(req.params.usersId, function (err, user) {
    if (err) res.send(err);
    res.json({
      message: "Users details loading..",
      data: user,
    });
  });
};
