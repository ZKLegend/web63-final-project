const { imageSchema } = require("../image");
const { categorySchema } = require("./category");
const { amenitySchema } = require("./amenity");
const { roomSchema } = require("./room");
const mongoose = require("mongoose");

const staySchema = new mongoose.Schema({
  stayName: String,
  star: Number,
  address: String,
  image: [imageSchema],
  category: [categorySchema],
  amenities: [amenitySchema],
  rooms: [roomSchema],
  logo: imageSchema,
});

const Stay = mongoose.model("Stay", staySchema);

module.exports = { Stay, staySchema };
