// Product Controller
const Product = require('../models/Product');

class ProductController {
  // Get all products
  static getAllProducts(req, res) {
    try {
      const products = Product.getAll();
      res.json({
        success: true,
        count: products.length,
        data: products
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving products',
        error: error.message
      });
    }
  }

  // Get product by ID
  static getProductById(req, res) {
    try {
      const product = Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found'
        });
      }
      res.json({
        success: true,
        data: product
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving product',
        error: error.message
      });
    }
  }

  // Get products by category
  static getProductsByCategory(req, res) {
    try {
      const products = Product.getByCategory(req.params.category);
      res.json({
        success: true,
        count: products.length,
        data: products
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving products by category',
        error: error.message
      });
    }
  }

  // Search products by name
  static searchProducts(req, res) {
    try {
      const searchTerm = req.query.name;
      if (!searchTerm) {
        return res.status(400).json({
          success: false,
          message: 'Search term is required'
        });
      }
      const products = Product.searchByName(searchTerm);
      res.json({
        success: true,
        count: products.length,
        data: products
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error searching products',
        error: error.message
      });
    }
  }
}

module.exports = ProductController;
