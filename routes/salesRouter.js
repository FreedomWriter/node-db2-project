const express = require("express");

const db = require("../data/db");

const router = express.Router({
  mergeParams: true
});

router.get("/", async (req, res) => {
  try {
    const sales = await db("sales");
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: "Failed to get sales" });
  }
});

router.get("/:sales_id", async (req, res) => {
  const { sales_id } = req.params;
  try {
    const sale = await db("sales")
      .where("sales_id", sales_id)
      .first();
    res.json(sale);
  } catch (err) {
    res.status(500).json({ message: "Failed to get sale" });
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const [id] = await db("sales").insert(body);
    res.json(
      await db("sales")
        .where("sales_id", id)
        .first()
    );
  } catch (err) {
    res.status(500).json({ message: "Failed to add car", error: err.message });
  }
});

router.put("/:sales_id", async (req, res) => {
  try {
    await db("sales")
      .where("sales_id", req.params.sales_id)
      .update(req.body);
    res.json(
      await db("sales")
        .where("sales_id", req.params.sales_id)
        .first()
    );
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update car", error: err.message });
  }
});

router.delete("/:sales_id", async (req, res) => {
  const { sales_id } = req.params;
  try {
    await db("sales")
      .where("sales_id", sales_id)
      .del();
    res.status(204).end();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete car", error: err.message });
  }
});

module.exports = router;
