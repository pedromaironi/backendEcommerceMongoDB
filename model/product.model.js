const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
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
  price: {
    type: String,
    // required: true
  },
  quantity: {
    type: String,
    // required: true
  },
});

// Export Categories model
var Products = module.exports = mongoose.model("products", productsSchema);
module.exports.get = function (callback, limit) {
  Products.find(callback).limit(limit);
}

