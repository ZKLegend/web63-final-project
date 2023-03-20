const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

// Register User
router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashed,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      birthday: req.body.birthday,
      gender: req.body.gender,
    });

    await newUser.save();
    res.status(200).send(newUser);
  } catch (err) {
    res.status(404).send(err);
  }
});

//Login User
router.post("/login", async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get("/getInfo", async (req, res) => {
  if (!req.headers.authtoken) {
    return res.status(403).send("Unauthorized");
  }
  try {
    const decoded = jwt.verify(req.headers.authtoken, "privateKey");
    if (decoded) {
      let result = await User.findOne({ _id: decoded._id });
      const newDate = result.birthday.toISOString().substring(0, 10);
      const userInfo = { ...result._doc, birthday: newDate };
      res.status(200).send(userInfo);
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
