// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Ecommerce app!'
    });
});

// Import Categories controller
var categoriesController = require('../controllers/categories.controller');

// Categories routes
router.route('/categories')
    .get(categoriesController.index);
router.route('/categories/:categories_id')
    .get(categoriesController.view);
    // .patch(CategoriesController.update)
    // .put(CategoriesController.update)
    // .delete(CategoriesController.delete);

// Export API routes
module.exports = router;

// Export API routes
module.exports = router;