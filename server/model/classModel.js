const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  class_name: {
    type: String,
    required: true,
    unique: true // Ensures unique class names
  }
});

module.exports = mongoose.model('Class', classSchema);
