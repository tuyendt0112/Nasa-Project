const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: String,
    required: true,
    unique: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});

//Export the model
module.exports = mongoose.model("Launch", launchesSchema);
