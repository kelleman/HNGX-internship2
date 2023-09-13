// routes/personRoutes.js
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Create a new person
router.post('/api', personController.createPerson);

// Read a person by ID
router.get('/api/:id', personController.getPersonById);

// Update a person by ID
router.put('/api/:id', personController.updatePersonById);

// Delete a person by ID
router.delete('/api/:id', personController.deletePersonById);

module.exports = router;
