// CategoriesController.js
// Import Categories model
Products = require('../model/product.model');
// Handle index actions
exports.index = function (req, res) {
    Categories.get(function (err, categories) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: categories
        });
    });
};

// Handle view categories info
exports.view = function (req, res) {
    Categories.findById(req.params.categoriesId, function (err, categories) {
        if (err)
            res.send(err);
        res.json({
            message: 'Categories details loading..',
            data: categories
        });
    });
};