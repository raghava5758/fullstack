// Product Routes
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Route to get all products
router.get('/', ProductController.getAllProducts);

// Route to search products by name (query parameter)
router.get('/search', ProductController.searchProducts);

// Route to get products by category
router.get('/category/:category', ProductController.getProductsByCategory);

// Route to get product by ID
router.get('/:id', ProductController.getProductById);

module.exports = router;
