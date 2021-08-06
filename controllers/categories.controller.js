const Categories = require("../model/categories.model.js");
const express = require('express');
const router = express.Router();


// Retrieve and return all Categories from the database.
exports.findAll = (req, res) => {
  Categories.find()
    .then((Categories) => {
      res.send(Categories);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Categories.",
      });
    });
};

// Find a single Categories with a CategoriesId
exports.findOne = (req, res) => {
  Categories.findById(req.params.CategoriesId)
    .then((Categories) => {
      if (!Categories) {
        return res.status(404).send({
          message: "Categories not found with id " + req.params.CategoriesId,
        });
      }
      res.send(Categories);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Categories not found with id " + req.params.CategoriesId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving Categories with id " + req.params.CategoriesId,
      });
    });
};

// Update a Categories identified by the CategoriesId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.email) {
    return res.status(400).send({
      message: "Categories email can not be empty",
    });
  }

  // Find Categories and update it with the request body
  Categories.findByIdAndUpdate(
    req.params.CategoriesId,
    {
      name: req.body.name || "Untitled Categoriesname",
      email: req.body.email,
      password: req.body.password,
    },
    { new: true }
  )
    .then((Categories) => {
      if (!Categories) {
        return res.status(404).send({
          message: "Categories not found with id " + req.params.CategoriesId,
        });
      }
      res.send(Categories);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Categories not found with id " + req.params.CategoriesId,
        });
      }
      return res.status(500).send({
        message: "Error updating Categories with id " + req.params.CategoriesId,
      });
    });
};

// Delete a Categories with the specified CategoriesId in the request
exports.delete = (req, res) => {
    Categories.findByIdAndRemove(
        req.params.CategoriesId,
    )
    .then(Categories => {
        if(!Categories) {
            return res.status(404).send({
                message: "Categories not found with id " + req.params.CategoriesId
            });
        }
        res.send({message: "Categories deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Categories not found with id " + req.params.CategoriesId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Categories with id " + req.params.CategoriesId
        });
    });
};

exports.signUp = (req, res) => {

}

exports.signIn = (req, res) => {

}

// exports.router.post('/signup',(req,res)=>{
//   Categories.findOne({email:req.body.email},(err,Categories)=>{
//       if(err){
//           console.log(err)
//           res.json(err)
//       }else{
//           if(Categories==null){
//               const Categories = Categories({
//                   email:req.body.email,
//                   password:req.body.password
//               })
//               Categories.save()
//               .then((err)=>{
//                   if(err){
//                       console.log(err)
//                       res.json(err)
//                   }else{
//                       console.log(Categories)
//                       res.json(Categories)
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