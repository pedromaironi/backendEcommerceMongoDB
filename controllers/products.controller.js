// CategoriesController.js
// Import Categories model
Products = require('../model/product.model');
// Handle index actions
exports.index = function (req, res) {
    Products.get(function (err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: products
        });
    });
};

// Handle view categories info
exports.view = function (req, res) {
    Products.findById(req.params.productsId, function (err, products) {
        if (err)
            res.send(err);
        res.json({
            message: 'Products details loading..',
            data: products
        });
    });
};