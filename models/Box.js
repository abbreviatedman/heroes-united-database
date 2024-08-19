const { Schema, model } = require("mongoose");

const boxSchema = new Schema({
  wave: Number,

  name: {
    type: String,
    unique: true,
    required: true,
  },
});

const Box = model("Box", boxSchema);

module.exports = { Box, boxSchema };
