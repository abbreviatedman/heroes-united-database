const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function connectToMongoDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MONGODB CONNECTED");
    })
    .catch((e) => {
      console.log(e);
    });
}
