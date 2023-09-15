// controllers/personController.js
const Person = require('../models/personModel');

// Create a new person
exports.createPerson = async (req, res) => {
  try {
    const { name, age } = req.body;
    const person = new Person({ name, age });
    await person.save();
    
    // Send a success message
    res.status(201).json({ message: 'Person created successfully', createdPerson: person });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Read a person by ID
exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a person by ID
exports.updatePersonById = async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    
    // Send a success message
    res.json({ message: 'Person updated successfully', updatedPerson: person });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Delete a person by ID
exports.deletePersonById = async (req, res) => {
  try {
    const person = await Person.findByIdAndRemove(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    // Send a success message
    res.status(204).json({ message: 'Person deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
