const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var planetSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Planet", planetSchema);
