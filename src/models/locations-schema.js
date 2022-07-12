const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "Point",
    enum: ["Point"],
  },
  coordinates: [Number],
  city: String,
  province: String,
  address: String,
  country: {
    type: String,
    default: "Indonesian",
  },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
