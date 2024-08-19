const {Hero} = require('../models/Hero');

async function getAllHeroes() {
  try {
    const heroes = await Hero.find({});

    return heroes;
  } catch(error) {
    throw error;
  }
}

module.exports = {
  getAllHeroes,
}
