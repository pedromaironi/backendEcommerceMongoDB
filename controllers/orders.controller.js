// UserController.js
// Import User model
orders = require("../model/orders.model");

// Handle index actions
exports.index = function (req, res) {
  orders.get(function (err, orders) {
    if (err) {
      res.json({
        status: "error a",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Orders retrieved successfully",
      data: orders,
    });
  });
};

// Handle create users actions
exports.new = function (req, res) {
  // Validate request
  if (
    !req.body.nameUser &&
    !req.body.product &&
    !req.body.orderTime &&
    !req.body.orderDelivered &&
    !req.body.total
  ) {
    return res.status(400).send({
      message: "Orders can not be empty",
    });
  }

  const order = new orders({
    nameUser: req.body.nameUser,
    product: req.body.product,
    orderTime: req.body.orderTime,
    orderDelivered: req.body.orderDelivered,
    total: req.body.total,
  });

  // save the user and check for errors
  order.save(function (err) {
    res.json({
      message: "New order created!",
      data: order,
    });
  });
};

// Handle view User info
exports.view = function (req, res) {
  orders.findById(req.params.orderId, function (err, order) {
    if (err) res.send(err);
    res.json({
      message: "Order details loading..",
      data: order,
    });
  });
};

// exports.update = function (req, res) {
//   users.findById(req.params.usersId, function (err, user) {
//     // Validate request
//     if (!req.body.email && !req.body.name && !req.body.password) {
//       return res.status(400).send({
//         message: "Order can not be empty",
//       });
//     }

//     user.name = req.body.name ? req.body.name : user.name;
//     user.password = req.body.password;
//     user.email = req.body.email;

//     // save the users and check for errors
//     user.save(function (err) {
//       if (err) res.json(err);
//       res.json({
//         message: "users Info updated",
//         data: user,
//       });
//     });
//   });
// };

// // Handle delete users
// exports.delete = function (req, res) {
//   users.findByIdAndDelete(req.params.usersId, function (err, user) {
//     // deleting the users and check for errors
//     res.json({
//       message: "users deleted",
//       data: user,
//     });
//   });
// };
