const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  section_name: {
    type: String,
    required: true,
    unique: true // Ensures unique section names
  }
});

module.exports = mongoose.model('Section', sectionSchema);
