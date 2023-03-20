const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { Review } = require("../models/review");

// Create Review for Hotel
router.post("/:hotelId", async (req, res) => {
  console.log(req.body);

  if (!req.headers.authtoken) {
    return res.status(403).send("Unauthorized");
  }
  try {
    console.log(req.headers.authtoken);
    const decoded = jwt.verify(req.headers.authtoken, "privateKey");
    if (decoded) {
      let user = await User.findOne({ _id: decoded._id });
      let newReview = new Review({
        createdByUserId: user._id,
        createdAtHotelId: req.params.hotelId,
        reviewContent: req.body.reviewContent,
        reviewPoint: req.body.reviewPoint,
      });

      await newReview.save();
      res
        .status(200)
        .send({ message: "Your Review has been submitted", newReview });
    }
  } catch (err) {
    console.error(err);
    res.status(400).send("Something wrong. Try again later");
  }
});

// Get Review with hotelID
router.get("/:hotelId", async (req, res) => {
  try {
    const reviews = await Review.aggregate()
      .match({
        createdAtHotelId: mongoose.Types.ObjectId(req.params.hotelId),
      })
      .lookup({
        from: "users",
        localField: "createdByUserId",
        foreignField: "_id",
        as: "userInfo",
        pipeline: [{ $project: { username: 1 } }],
      })
      .unwind({ path: "$userInfo" })
      .sort({ createdAt: -1 })
      .project({ reviewPoint: 1, reviewContent: 1, "userInfo.username": 1 });

    res.status(200).send(reviews);
  } catch (err) {
    res.status(400).send("Something wrong. Cannot get Review");
    console.error(err);
  }
});

module.exports = router;
