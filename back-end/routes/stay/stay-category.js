const { StayCategory } = require("../../models/stay/stay-category");
const express = require("express");
const router = express.Router();

// Get all Stay Category
router.get("/", async (req, res) => {
  const category = await StayCategory.find().sort("name");
  res.send(category);
});

// Add Stay Category
router.post("/", async (req, res) => {
  const category = await StayCategory.findOne({ name: req.body.name });
  if (category && category !== null)
    return res.status(401).send("This Category already existed");

  const newCategory = { name: req.body.name };
  await StayCategory.insertMany(newCategory);
  res.send(newCategory);
});

module.exports = router;
