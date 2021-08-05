const User = require("../model/user.model.js");
const express = require('express');
const router = express.Router();


// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.email) {
  //   return res.status(400).send({
  //     message: "User email can not be empty",
  //   });
  // }

  const user = new User({
    name: req.body.name || "Untitled Username",
    email: req.body.email,
    password: req.body.password,
  });

  // Save User in the database
  user
    .save()
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
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      res.send(user);
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
  if (!req.body.email) {
    return res.status(400).send({
      message: "User email can not be empty",
    });
  }

  // Find user and update it with the request body
  User.findByIdAndUpdate(
    req.params.userId,
    {
      name: req.body.name || "Untitled Username",
      email: req.body.email,
      password: req.body.password,
    },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.userId,
      });
    });
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(
        req.params.userId,
    )
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};

exports.signUp = (req, res) => {

}

exports.signIn = (req, res) => {

}

// exports.router.post('/signup',(req,res)=>{
//   User.findOne({email:req.body.email},(err,user)=>{
//       if(err){
//           console.log(err)
//           res.json(err)
//       }else{
//           if(user==null){
//               const user = User({
//                   email:req.body.email,
//                   password:req.body.password
//               })
//               user.save()
//               .then((err)=>{
//                   if(err){
//                       console.log(err)
//                       res.json(err)
//                   }else{
//                       console.log(user)
//                       res.json(user)
//                   }
                  
//               })
//           }else{

//           res.json({
//               message:'email is not avilable'
//           })   
//           }
//       }
//   })
  
// })