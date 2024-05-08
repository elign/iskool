const mongoose = require('mongoose');

const monthlyPlannerSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  month: {
    type: Number,
    required: true,
    min: 1,
    max: 12 // Ensures valid month values (1-12)
  },
  year: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  event_name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('MonthlyPlanner', monthlyPlannerSchema);
