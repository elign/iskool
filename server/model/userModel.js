const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Full name not entered"],
  },
  email: {
    type: String,
    unique: [true, "Email already exist in the Database"],
    lowercase: true,
    trim: true,
    required: [true, "Email not provided"],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "Email provided is incorrect",
    },
  },
  role: {
    type: String,
    required: true,
    enum: ["student", "teacher", "admin"],
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
