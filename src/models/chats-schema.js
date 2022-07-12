const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    require: [true, "Chat must belong a message"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    require: [true, "User must belong an user"],
  },
  sentAt: {
    type: Date,
    default: Date.now(),
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
