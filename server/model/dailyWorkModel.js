const mongoose = require('mongoose');

const dailyWorkSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  subject_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Subject' // Reference to the Subject model
  },
  date: {
    type: Date,
    required: true
  },
  homework_details: {
    type: String,
    required: true
  },
  classwork_details: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('DailyWork', dailyWorkSchema);
