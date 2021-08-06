const mongoose = require("mongoose");

const Products = new mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  image: {
    type: String,
    // required: true
  },
  id: {
    type: String,
    // required: true
  },
  detail: {
    type: Number,
    // required: true
  },
  stock: {
    type: Number,
    // required: true
  },
});

module.exports = mongoose.model("productos", Products);
