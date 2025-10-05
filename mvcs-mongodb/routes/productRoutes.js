// Product Routes - Express Router Configuration
// ByteXL Practice - MVCS MongoDB Implementation

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CREATE Routes
// POST /api/products - Create a single product
router.post('/', productController.createProduct);

// POST /api/products/bulk - Create multiple products
router.post('/bulk', productController.createMultipleProducts);

// READ Routes
// GET /api/products - Get all products
router.get('/', productController.getAllProducts);

// GET /api/products/:id - Get product by ID
router.get('/:id', productController.getProductById);

// GET /api/products/name/:name - Get product by name
router.get('/name/:name', productController.getProductByName);

// UPDATE Routes
// PUT /api/products/:id - Update product by ID
router.put('/:id', productController.updateProduct);

// DELETE Routes
// DELETE /api/products/:id - Delete product by ID
router.delete('/:id', productController.deleteProduct);

// DELETE /api/products/name/:name - Delete product by name
router.delete('/name/:name', productController.deleteProductByName);

module.exports = router;

/* 
 * Usage in main app.js/server.js:
 * 
 * const productRoutes = require('./routes/productRoutes');
 * app.use('/api/products', productRoutes);
 * 
 * This will create endpoints:
 * - POST   /api/products          (Create single product)
 * - POST   /api/products/bulk     (Create multiple products)
 * - GET    /api/products          (Get all products)
 * - GET    /api/products/:id      (Get product by ID)
 * - GET    /api/products/name/:name (Get product by name)
 * - PUT    /api/products/:id      (Update product)
 * - DELETE /api/products/:id      (Delete product by ID)
 * - DELETE /api/products/name/:name (Delete product by name)
 */
