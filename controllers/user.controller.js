// UserController.js
// Import User model
Users = require("../model/user.model");

// Handle index actions
exports.index = function (req, res) {
  Users.get(function (err, users) {
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
  var userss = new Users();
  
  userss.name = req.body.name;
  userss.email = req.body.email;
  userss.password = req.body.password;

  // save the user and check for errors
  userss.save(function (err) {
    if (err) res.send(err);
    res.json({
      message: "New user created!",
      data: userss,
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
