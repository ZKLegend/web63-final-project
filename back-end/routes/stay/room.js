const express = require("express");
const router = express.Router();

const { Room } = require("../../models/stay/room");
const { Hotel } = require("../../models/stay/hotel");
const { Image } = require("../../models/image");

router.post("/", async (req, res) => {
  const hotel = await Hotel.findById(req.body.hotelId);
  const image = await Image.findById(req.body.imagesId);
  if (!image) return res.status(401).send("No Images found");

  const room = {
    roomName: req.body.name,
    numberInStock: req.body.number,
    basePrice: req.body.price,
    availableGuest: req.body.availableGuest,
    images: {
      _id: image._id,
      imageSrc: image.imageSrc,
    },
    bookedDate: {
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
    },
  };
  await Room.insertMany(room);
  res.send({ message: "Room created success", room });
});

router.put("/:id", async (req, res) => {
  let room = await Room.findById(req.params.id);
  const image = await Image.findById(req.body.imagesId);
  const newRoom = {
    roomName: req.body.name,
    numberInStock: req.body.number,
    basePrice: req.body.price,
    availableGuest: req.body.availableGuest,
    images: {
      _id: image._id,
      imageSrc: image.imageSrc,
    },
    bookedDate: {
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
    },
  };
  // room.images.push({ _id: image._id, imageSrc: image.imageSrc });
  // room.bookedDate.push({
  //   checkIn: req.body.checkIn,
  //   checkOut: req.body.checkOut,
  // });
  await room.save();
  console.log(room);

  res.send(room);
});

module.exports = router;
