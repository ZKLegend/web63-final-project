const mongoose = require("mongoose");

const stayCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const StayCategory = mongoose.model("Category", stayCategorySchema);

module.exports = { StayCategory: StayCategory };
