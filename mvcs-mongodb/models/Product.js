// Product Model - Mongoose Schema
// ByteXL Practice - MVCS MongoDB CRUD Operations

const mongoose = require('mongoose');

// Define the Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    trim: true
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
