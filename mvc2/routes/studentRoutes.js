// Student Routes - API Endpoints
// Practice 2 - Student Management MVC
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// POST - Create a new student
router.post('/students', studentController.createStudent);

// GET - Get all students
router.get('/students', studentController.getAllStudents);

// GET - Get student by ID
router.get('/students/:id', studentController.getStudentById);

// PUT - Update student by ID
router.put('/students/:id', studentController.updateStudent);

// DELETE - Delete student by ID
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;
