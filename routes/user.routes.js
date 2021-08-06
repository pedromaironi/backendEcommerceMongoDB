module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/users', users.create);

    // Retrieve all Users
    app.get('/users', users.findAll);

    // Retrieve a single User with userId
    app.get('/users/:userId', users.findOne);

    // Update a User with userId
    app.put('/users/:userId', users.update);

    // Delete a User with userId
    app.delete('/users/:userId', users.delete);

    app.post('/signIn', users.signIn);

    app.post('signUp', users.signUp);

    

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