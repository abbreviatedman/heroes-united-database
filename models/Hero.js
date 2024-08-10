const { Schema, model, Types } = require("mongoose");

const heroSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },

    box: {
      type: Types.ObjectId,
      ref: "Box",
      required: true,
    },

    cards: [
      {
        symbols: [String],
        name: String,
        specialAbility: String,
        specialIsMandatory: Boolean,
      },
    ],

    antihero: Boolean,
  },
  { collection: "heroes" }
);

module.exports = model("Hero", heroSchema);
