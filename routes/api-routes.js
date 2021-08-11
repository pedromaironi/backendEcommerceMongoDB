// Filename: api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to Ecommerce app!",
  });
});

// Import Categories controller
var categoriesController = require("../controllers/categories.controller");
var productsController = require("../controllers/products.controller");
var usersController = require("../controllers/user.controller");

// Categories routes
router.route("/categories").get(categoriesController.index);
router.route("/categories/:categoriesId").get(categoriesController.view);

// Categories routes
router.route("/products").get(productsController.index);
router.route("/products/:productsId").get(productsController.view);

// Users routes
router.route("/users").get(usersController.index);
router.route("/users").post(usersController.new);
router.route("/users/signup").post(usersController.signup);
router
  .route("/users/:usersId")
  .get(usersController.view)
  .patch(usersController.update)
  .put(usersController.update)
  .delete(usersController.delete);

// Export API routes
module.exports = router;
