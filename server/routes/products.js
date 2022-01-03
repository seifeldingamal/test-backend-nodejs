const express = require('express');
const productsController = require('../controllers/productController');

const router = express.Router();

// Get Products
router.get('/', productsController.productsGet);

// Get Filtered Products
router.get('/filter', productsController.productsFilter);

// Add Product
router.post('/', productsController.productPost);

// Update Product
router.put('/:id/update', productsController.productPut);

// Update Product Category
router.put('/:id/category', productsController.categoryUpdate);

// Delete
router.delete('/:id/delete', productsController.productDelete);

module.exports = router;