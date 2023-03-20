const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

// Register User
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashed,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
  });

  await newUser.save();
  res.status(200).send(newUser);
});

//Login User
router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(201).send("Wrong username");
  }
  const password = await bcrypt.compare(req.body.password, user.password);
  if (!password) {
    return res.status(201).send("Wrong password");
  }
  if (user && password) {
    let token = jwt.sign(
      {
        _id: user._id,
        username: user.username,
      },
      "privateKey"
    );
    res.status(200).send({ token, message: "Login Success" });
  }
});

module.exports = router;
