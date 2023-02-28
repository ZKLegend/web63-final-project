const { imageSchema } = require("../image");
const { staySchema } = require("../stay/stay");
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomName: String,
  numberInStock: Number,
  basePrice: Number,
  availableGuest: Number,
  images: [imageSchema],
  bookedDate: [
    {
      checkIn: Date,
      checkOut: Date,
    },
  ],
  stay: new mongoose.Schema({
    stayName: String,
    address: String,
    logo: imageSchema,
  }),
});

const Room = mongoose.model("room", roomSchema);

module.exports = { Room, roomSchema };
