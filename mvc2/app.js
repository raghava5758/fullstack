// Main Application File
// Practice 2 - Student Management MVC
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection String
// Replace with your actual MongoDB connection string
const MONGODB_URI = 'mongodb://localhost:27017/student_management';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', studentRoutes);

// Root Route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Student Management API - Practice 2',
    endpoints: {
      'GET /api/students': 'Get all students',
      'POST /api/students': 'Create new student',
      'GET /api/students/:id': 'Get student by ID',
      'PUT /api/students/:id': 'Update student by ID',
      'DELETE /api/students/:id': 'Delete student by ID'
    }
  });
});

// Connect to MongoDB and Start Server
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

module.exports = app;
