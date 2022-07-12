const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must belong a name"],
  },
  bio: String,
  photo: String,
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  account: {
    type: mongoose.Schema.ObjectId,
    ref: "Account",
    require: [true, "User must belong an account"],
  },
  location: {
    type: mongoose.Schema.ObjectId,
    ref: "Location",
    require: [true, "User must belong an location"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
