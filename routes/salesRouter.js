const express = require("express");

const db = require("../data/db");

const router = express.Router();

router.get("/:salesId", async (req, res) => {
  const { salesId } = req.params;
  try {
    const sale = await db("sales").where("sales_id", salesId);
    res.json(sale);
  } catch (err) {
    res.status(500).json({ message: "Failed to get sale" });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const car = await db("cars")
//       .where("id", req.params.id)
//       .first();
//     res.json(car);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to get car" });
//   }
// });

// router.post("/", async (req, res) => {
//   const { body } = req;
//   console.log(body);
//   try {
//     const [id] = await db("cars").insert(body);
//     res.json(
//       await db("cars")
//         .where("id", id)
//         .first()
//     );
//   } catch (err) {
//     res.status(500).json({ message: "Failed to add car", error: err.message });
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     await db("cars")
//       .where("id", req.params.id)
//       .update(req.body);
//     res.json(
//       await db("cars")
//         .where("id", req.params.id)
//         .first()
//     );
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "Failed to update car", error: err.message });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     await db("cars")
//       .where("id", id)
//       .del();
//     res.status(204).end();
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "Failed to delete car", error: err.message });
//   }
// });

module.exports = router;
