// Student Model - Mongoose Schema
// Practice 2 - Student Management MVC
const mongoose = require('mongoose');

// Define the Student Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true
  },
  age: {
    type: Number,
    required: [true, 'Student age is required'],
    min: [5, 'Age must be at least 5'],
    max: [100, 'Age must be less than 100']
  },
  grade: {
    type: String,
    required: [true, 'Student grade is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

// Create and export the Student model
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
