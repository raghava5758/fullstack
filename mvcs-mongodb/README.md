# MVCS MongoDB - Product CRUD Operations

This folder contains MongoDB CRUD operations practice from ByteXL Nimbus workspace.

## Overview
Implementation of a complete CRUD (Create, Read, Update, Delete) system for Products using MongoDB, Mongoose, Express.js, and Node.js.

## Files Structure
```
mvcs-mongodb/
├── README.md              # This file
├── models/
│   └── Product.js         # Mongoose schema for Product
├── routes/
│   └── productRoutes.js   # Express routes for CRUD operations
├── controllers/
│   └── productController.js # Controller logic for operations
└── mongodb-commands.md    # Direct MongoDB shell commands
```

## Product Schema
The product model includes:
- name: String (required)
- price: Number (required)
- category: String (required)

## CRUD Operations
1. **CREATE** - Insert new products into the database
2. **READ** - Retrieve all products or specific products
3. **UPDATE** - Modify existing product details
4. **DELETE** - Remove products from the database

## ByteXL Practice Context
This implementation is based on practice exercises from ByteXL's Nimbus workspace using MongoDB database `db_43yp6tm7y`.

## Technologies Used
- MongoDB - NoSQL database
- Mongoose - ODM for MongoDB
- Express.js - Web framework
- Node.js - Runtime environment

## Sample Data
The examples use product data:
- Laptop (Electronics, $999)
- T-Shirt (Clothing, $25)
- Book (Books, $15)

## How to Use
1. Install dependencies: `npm install express mongoose`
2. Configure MongoDB connection string
3. Import the models, routes, and controllers
4. Run the Express server
5. Test CRUD operations via API endpoints

## Reference
- ByteXL Platform: https://bytexl.app/
- Nimbus Workspace MongoDB Practice
