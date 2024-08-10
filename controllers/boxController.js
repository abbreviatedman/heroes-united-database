const Box = require('../models/Box');

async function getAllBoxes() {
  try {
    const boxes = await Box.find({});

    return boxes;
  } catch(error) {
    throw error;
  }
}

module.exports = {
  getAllBoxes,
}
