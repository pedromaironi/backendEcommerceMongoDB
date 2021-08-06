const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
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
});

// Export Categories model
var Categories = module.exports = mongoose.model('categories', CategoriesSchema);
module.exports.get = function (callback, limit) {
    Categories.find(callback).limit(limit);
}