const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewContent: { type: String, require: true },
  reviewPoint: { type: Number, require: true },
  createdAt: { type: Date, require: true, default: Date.now() },
  createdByUserId: mongoose.Schema.Types.ObjectId,
  createdAtHotelId: mongoose.Schema.Types.ObjectId,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review, reviewSchema };
