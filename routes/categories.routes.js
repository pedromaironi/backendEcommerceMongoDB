module.exports = (app) => {
    const Categories = require('../controllers/Categories.controller.js');
    
    // Retrieve all Categoriess
    app.get('/categories', Categories.findAll);

    // Retrieve a single Categories with CategoriesId
    app.get('/categories/:categoriesId', Categories.findOne);

    // Update a Categories with CategoriesId
    app.put('/categories/:categoriesId', Categories.update);

    // Delete a Categories with CategoriesId
    app.delete('/categories/:categoriesId', Categories.delete);
}