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

module.exports = router;
