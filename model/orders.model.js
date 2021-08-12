const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  nameUser: {
    type: String,
    // required: true
  },
  orderTime: {
    type: Date,
    // required: true
  },
  orderDelivered: {
    type: Date,
    // required: true
  },
  product: {
    type: Object,
    // required: true
  },
  total: {
    type: Number,
    // required: true
  },
});

// Export Categories model
var Order = module.exports = mongoose.model('orders', OrdersSchema);
module.exports.get = function (callback, limit) {
    Order.find(callback).limit(limit);
}