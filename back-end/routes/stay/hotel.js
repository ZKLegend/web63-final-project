const { Image } = require("../../models/image");
const { Category } = require("../../models/stay/category");
const { Amenity } = require("../../models/stay/amenity");
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.post("/", async (req, res) => {
  Image.find(
    {
      _id: {
        $in: req.body.imageId.map((element) =>
          mongoose.Types.ObjectId(element)
        ),
      },
    },
    function (err, docs) {
      res.send(docs);
    }
  );
});

module.exports = router;
