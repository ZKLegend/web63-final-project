const { imageSchema } = require("../image");

const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomName: String,
  numberInStock: Number,
  basePrice: Number,
  availableGuest: Number,
  images: [imageSchema],
  bookedDate: [
    {
      checkIn: { type: Date },
      checkOut: { type: Date },
    },
  ],
  stay: mongoose.Schema.Types.ObjectId,
});

const Room = mongoose.model("room", roomSchema);

module.exports = { Room, roomSchema };
