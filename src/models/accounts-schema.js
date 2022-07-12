const mongoose = require("mongoose");
const validator = require("validator");

const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Account must belong an email"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "Account must belong a password"],
  },
  role: {
    type: String,
    enum: ["master", "admin", "user"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: Date,
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
