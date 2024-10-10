//userRoutes.js for controller
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Assuming the path to controller is correct

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);

module.exports = router; // Make sure this line is present
