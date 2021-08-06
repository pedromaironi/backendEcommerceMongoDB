// CategoriesController.js
// Import Categories model
Categories = require('../model/categories.model');
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
            message: "Categories retrieved successfully",
            data: categories
        });
    });
};

// Handle view categories info
exports.view = function (req, res) {
    Categories.findById(req.params.categories_id, function (err, categories) {
        if (err)
            res.send(err);
        res.json({
            message: 'Categories details loading..',
            data: categories
        });
    });
};