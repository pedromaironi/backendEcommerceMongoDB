// ProductsController.js
// Import products model
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

// Handle view products info
exports.view = (req, res) => {
    Products.findById(req.params.productsId, function (err, products) {
        if (err)
            res.send(err);
        res.json({
            message: 'Products details loading..',
            data: products
        });
    });
};

// Handle view products info
exports.search = function (req, res) {
    // product = new Products({
    //     name: req.body.name,
    //   });
    
    // Products.find(req.body.name, function (err, products) {
    //     if (err)
    //         res.send("a");
    //     res.json({
    //         message: 'Products details loading..',
    //         data: products
    //     });
    // });
};