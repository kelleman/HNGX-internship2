// models/person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
});

module.exports = mongoose.model('Person', personSchema);
