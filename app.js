const express = require("express");
const logger = require("morgan");

const { getAllHeroes } = require("./controllers/heroController");
const { getAllBoxes } = require("./controllers/boxController");
const makeErrorPacket = require("./utilities/makeErrorPacket");
const connectToMongoDB = require("./db/mongodb");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/v1/boxes", async (_, res) => {
  try {
    const boxes = await getAllBoxes();
    res.status(200).json({ message: "success", payload: boxes });
  } catch (error) {
    const packet = makeErrorPacket(error, "failure getting all boxes");
    res.status(200).json(packet);
    console.log(packet);
  }
});

app.get("/api/v1/heroes", async (_, res) => {
  try {
    const heroes = await getAllHeroes();
    res.status(200).json({ message: "success", payload: heroes });
  } catch (error) {
    const packet = makeErrorPacket(error, "failure getting all heroes");
    res.status(200).json(packet);
    console.log(packet);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
  connectToMongoDB();
});
