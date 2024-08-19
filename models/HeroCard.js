const { Schema, model } = require("mongoose");

const heroCardSchema = new Schema({
  symbols: [String],
  name: String,
  specialAbility: String,
  specialIsMandatory: Boolean,
  isStartingCard: Boolean,
  isBottomOfDeck: Boolean,
  isFreeCard: Boolean,
});

const HeroCard = model("HeroCard", heroCardSchema);

module.exports = { HeroCard, heroCardSchema };
