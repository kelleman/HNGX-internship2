// routes/personRoutes.js
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Create a new person
router.post('/', personController.createPerson);

// Read a person by ID
router.get('/:id', personController.getPersonById);

// Update a person by ID
router.put('/:id', personController.updatePersonById);

// Delete a person by ID
router.delete('/:id', personController.deletePersonById);

module.exports = router;
