const { imageSchema } = require("../image");
const { categorySchema } = require("./category");
const { amenitySchema } = require("./amenity");

const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  hotelName: String,
  star: Number,
  address: String,
  image: [imageSchema],
  category: [categorySchema],
  amenities: [amenitySchema],
  logo: imageSchema,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = { Hotel, hotelSchema };
