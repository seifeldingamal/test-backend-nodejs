const express = require('express');
const productsController = require('../controllers/productController');

const router = express.Router();

// Get Products
router.get('/', productsController.productsGet);

router.post('/', productsController.productPost);

module.exports = router;