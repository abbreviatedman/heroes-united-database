const { Schema, model, Types } = require("mongoose");

const { heroCardSchema } = require("./HeroCard");

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

    cards: [heroCardSchema],
  },
  { collection: "heroes" }
);

const Hero = model("Hero", heroSchema);

module.exports = { Hero, heroSchema };
