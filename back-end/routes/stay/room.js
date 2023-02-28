const express = require("express");
const router = express.Router();

const { Room } = require("../../models/stay/room");
const { Stay } = require("../../models/stay/stay");
const { Image } = require("../../models/image");

router.post("/", async (req, res) => {
  const stay = await Stay.findById(req.body.stayId);
  if (!stay) return res.status(401).send("No Hotels found");
  const image = await Image.findById(req.body.imageId);
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
    stay: {
      _id: stay._id,
      stayName: stay.stayName,
      adress: stay.address,
      logo: stay.logo,
    },
  };
  await Room.insertMany(room);
  res.send({ message: "Room created success", room });
});

module.exports = router;
