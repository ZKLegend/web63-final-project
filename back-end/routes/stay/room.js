const express = require("express");
const router = express.Router();

const { Room } = require("../../models/stay/room");
const { Hotel } = require("../../models/stay/hotel");
const { Image } = require("../../models/image");

// Create Room
router.post("/", async (req, res) => {
  const images = await Image.find({
    _id: {
      $in: req.body.imageId,
    },
  });
  const hotel = await Hotel.findById(req.body.hotelId);
  if (!hotel) return res.status(401).send("No hotel found");
  const room = {
    roomName: req.body.roomName,
    numberInStock: req.body.numberInStock,
    basePrice: req.body.basePrice,
    availableGuest: req.body.availableGuest,
    images: images,
    hotel: hotel._id,
  };

  await Room.insertMany(room);
  res.send({ message: "Room created success", room });
});

// Edit Room
router.put("/:id", async (req, res) => {
  let images = await Image.find({
    _id: {
      $in: req.body.imageId,
    },
  });
  const hotel = await Hotel.findById(req.body.hotelId);
  if (!hotel) return res.status(401).send("No hotel found");

  const room = await Room.findByIdAndUpdate(
    req.params.id,
    {
      roomName: req.body.roomName,
      numberInStock: req.body.numberInStock,
      basePrice: req.body.basePrice,
      availableGuest: req.body.availableGuest,
      images: images,
      hotel: hotel,
    },
    { new: true }
  );

  if (req.body.checkIn && req.body.checkOut) {
    room.bookedDate.push({
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
    });
  }
  await room.save();
  res.send(room);
});

module.exports = router;
