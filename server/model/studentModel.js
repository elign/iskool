const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Reference to the User model
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Class' // Reference to the Class model
  },
  section_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Section' // Reference to the Section model
  },
  roll_number: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['M', 'F', 'O']
  },
  father_name: {
    type: String,
    required: true
  },
  // Add other relevant student information like mother_name, date_of_birth, etc.
});

module.exports = mongoose.model('Student', studentSchema);
