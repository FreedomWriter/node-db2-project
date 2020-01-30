const express = require("express");

const db = require("../data/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: "Failed to get cars" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const car = await db("cars")
      .where("id", req.params.id)
      .first();
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: "Failed to get car" });
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const [id] = await db("cars").insert(body);
    res.json(await db("cars").where("id", id));
  } catch (err) {
    res.status(500).json({ message: "Failed add car", error: err.message });
  }
});

module.exports = router;
