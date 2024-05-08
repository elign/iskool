const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  subject_name: {
    type: String,
    required: true
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
  }
});

module.exports = mongoose.model('Subject', subjectSchema);
