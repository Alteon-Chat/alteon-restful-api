const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

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
    select: false,
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

accountSchema.pre(/^find/, async function (next) {
  this.select("-__v");
  next();
});
accountSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// accountSchema.methods.validatePassword = async function (
//   password,
//   encryptedPassword
// ) {
//   return await bcrypt.compare(password, encryptedPassword);
// };

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
