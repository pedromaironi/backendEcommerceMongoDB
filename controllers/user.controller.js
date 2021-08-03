const User = require("../model/user.model.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    return res.status(400).send({
      message: "User email can not be empty",
    });
  }

  const user = new User({
    name: req.body.name || "Untitled Username",
    email: req.body.email,
    password: req.body.password,
    
  });

  // Save User in the database
  user.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  user
    .find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
  user
    .findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.userId,
      });
    });
};

// Update a User identified by the UserId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: "User content can not be empty",
    });
  }

  // Find note and update it with the request body
  Note.findByIdAndUpdate(
    req.params.noteId,
    {
      title: req.body.title || "Untitled Note",
      content: req.body.content,
    },
    { new: true }
  )
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "User not found with id " + req.params.noteId,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.noteId,
      });
    });
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {};
