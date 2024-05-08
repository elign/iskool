const testResultsSchema = new mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    subject_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Subject' // Reference to the Subject model
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Student' // Reference to the Student model
    },
    date: {
      type: Date,
      required: true
    },
    marks: {
      type: Number,
      required: true
    },
    // Additional fields for test details
    test_type: {
      type: String,
      required: true // Can be 'unit test', 'midterm', 'final exam', etc.
    },
    total_marks: {
      type: Number,
      required: true
    },
  });
  
  module.exports = mongoose.model('TestResults', testResultsSchema);
  