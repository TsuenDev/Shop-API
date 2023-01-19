const express = require('express'),
    { ProductsController } = require('./controller.js'),
    router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
        .get('/', ProductsController.getProducts) // http://localhost:3000/api/products/
        .get('/:id', ProductsController.getProduct) // http://localhost:3000/api/products/18
        .post('/', ProductsController.createProduct);

    app.use('/api/products', router);
}