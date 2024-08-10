const { Schema, model } = require("mongoose");

const boxSchema = new Schema({
  wave: Number,

  name: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = model("Box", boxSchema);
