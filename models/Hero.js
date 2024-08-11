const { Schema, model, Types } = require("mongoose");

const heroSchema = new Schema(
  {
    antihero: Boolean,

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
        isStartingCard: Boolean,
        isBottomOfDeck: Boolean,
      },
    ],
  },
  { collection: "heroes" }
);

module.exports = model("Hero", heroSchema);
