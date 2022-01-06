const express = require('express');
const productsController = require('./controllers/product');

const router = express.Router();

// Get Products
router.get('/', productsController.productGet);

// Get Filtered Products
router.get('/filter', productsController.productFilter);

// Add Product
router.post('/', productsController.productPost);

// Update Product
router.put('/:id/update', productsController.productPut);

// Update Product Category
router.put('/:id/category', productsController.productPut);

// Delete
router.delete('/:id/delete', productsController.productDelete);

module.exports = router;